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
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
      }
      return await res.json()
    } catch (error) {
      if (error.message.includes('отсутствует подключение к сети')) {
        throw new Error('Отсутствует подключение к сети')
      } else {
        throw new Error(`Ошибка запроса: ${error.message}`)
      }
    }
  }

  async getTickets() {
    try {
      if (this.id === null) {
        const id = await this.getResource(`${this.url}/search`)
        this.id = id.searchId
      }

      const res = await this.getResource(`${this.url}/tickets?searchId=${this.id}`)
      return res
    } catch (error) {
      throw new Error(`Произошла ошибка: ${error.message}`)
    }
  }
}
