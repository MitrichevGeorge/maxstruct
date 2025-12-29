# maxstruct
Изучаю работу max

## Основной ws
`wss://ws-api.oneme.ru/websocket`
<details>
  <summary>
    Инициатор
  </summary>
  
  Url: `https://web.max.ru/_app/immutable/chunks/xbuYJcdG.js:24:26663`
  
  Кратко(место в коде):
  ```js
  
  ...`);const s=Mt?.startTimer("Network - Connect");this.ws=new WebSocket(this.url);const r=()=>{try{this.ws.close(),d()}c
  
  ```
  [весь код xbuYJcdG.js](https://raw.githubusercontent.com/MitrichevGeorge/maxstruct/refs/heads/main/files/xbuYJcdG.js)
  1 этап деобфускации:
  file
</details>
<details>
  <summary>
    Диалог ws
  </summary>
  
  1. Всегда начинается с отправки от нас серверу:
  
  ```json
  {
  "ver": 11,
  "cmd": 0,
  "seq": 0,
  "opcode": 6,
  "payload": {
    "userAgent": {
      "deviceType": "WEB",
      "locale": "ru",
      "deviceLocale": "ru",
      "osVersion": "Windows",
      "deviceName": "Firefox",
      "headerUserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:147.0) Gecko/20100101 Firefox/147.0",
      "appVersion": "25.12.14",
      "screen": "972x1728 1.1x",
      "timezone": "Europe/Moscow"
    },
    "deviceId": "09c2d532-c599-4547-a00d-65f894e4d33c"
  }
}

  ```

2. Ответ от сервера

```json

{
  "ver": 11,
  "cmd": 1,
  "seq": 0,
  "opcode": 6,
  "payload": {
    "phone-auth-enabled": false,
    "reg-country-code": [
      "AZ",
      "AM",
      "KZ",
      "KG",
      "MD",
      "TJ",
      "UZ",
      "GE"
    ],
    "location": "RU"
  }
}

```

3.
</details>
