import axios from "axios";
import {_TOKEN_} from "../data/consts";

class HttpRequests {
  static getData = async (source: string, token?: string | undefined) => {
    try {
      const response = await axios(
        {
          url: source,
          method: "GET",
          headers: token ? {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          } : {"Content-Type": "application/json"}
        })

      if (response.status > 299) {
        return new Error(`Could not fetch ${source}, status: ${response.status}`)
      }

      return response.data

    } catch (error) {
      return error
    }
  }

  static postData = async (source: string, body: object, token?: string | undefined) => {
      try {
        const response = await axios(
          {
            url: source,
            method: "POST",
            data: body,
            headers: token ? {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            } : {"Content-Type": "application/json"}
          })

      if (response.status > 299) {
        console.log(new Error(`Could not fetch ${source}, status: ${response.status}`))
      }

      return response.data

    } catch (error) {
      console.log(error)
      return error
    }
  }

  static delete = async (source: string, token: boolean = false) => {
    try {
      const response = await axios(
        {
          url: source,
          method: "DELETE",
          headers: token ? {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          } : {"Content-Type": "application/json"}
        })

      if (response.status > 299) {
        return new Error(`Could not fetch ${source}, status: ${response.status}`)
      }

      return response.data

    } catch (error) {
      return error
    }
  }

  static put = async (source: string, body: object, token?: string | undefined) => {
    try {
      const response = await axios(
        {
          url: source,
          method: "PUT",
          data: body,
          headers: token ? {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          } : {"Content-Type": "application/json"}
        })

      if (response.status > 299) {
        return new Error(`Could not fetch ${source}, status: ${response.status}`)
      }

      return response.data

    } catch (error) {
      return error
    }
  }

  static patch = async (source: string, body: object, token: boolean = false) => {
    try {
      const response = await axios(
        {
          url: source,
          method: "PATCH",
          data: body,
          headers: token ? {
            "Content-Type": "application/json",
            "Authorization": _TOKEN_
          } : {"Content-Type": "application/json"}
        })

      if (response.status > 299) {
        return new Error(`Could not fetch ${source}, status: ${response.status}`)
      }

      return response.data

    } catch (error) {
      return error
    }
  }
}

export default HttpRequests