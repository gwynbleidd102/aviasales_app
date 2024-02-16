export default class AviasalesService {
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  }

  id = null
  url = 'https://aviasales-test-api.kata.academy'

  async getResource(url) {
    try {
      const res = await fetch(url, this.options)
      if (!res.ok) {
        throw new Error(`Could not fetch ${url} , status: ${res.status}`)
      }
      return await res.json()
    } catch (e) {
      if (e.message.includes('отсутствует подключение к сети')) {
        console.log('Отсутствует подключение к сети')
      } else {
        console.log(e.message)
      }
    }
  }

  async getTickets() {
    if (this.id === null) {
      const id = await this.getResource(`${this.url}/search`)
      this.id = id.searchId
    }

    const res = await this.getResource(`${this.url}/tickets?searchId=${this.id}`)
    return res
  }
}
