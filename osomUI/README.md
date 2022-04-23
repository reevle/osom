# OSOM-UI

![OSOM-UI](./vueIcon.svg)

Библиотека находится на ранней стадии разработки. Работает только с Vue 3.

## Возможности

- [x] Готовый набор компонентов в корпоративном стиле
- [x] Набор иконок
- [x] Готовый модуль тем
- [x] Плагин axios
- [x] Возможность добавлять иконки
- [ ] Модуль авторизации
- [ ] Документация

## Установка

```shell
# Клонируем репозиторий в папку рядом с проектом
git clone https://bnipi-git-1.rosneft.ru/ISHZakirianov/osom-ui.git

# Устанавливаем зависимости и билдим проект
cd osom-ui/
npm i
npm run build

# Переходим в папку проекта(например - example)
cd ../example

# Устанавливаем библиотеку
npm i ../osom-ui
```

## Использование

Советую создавать новый проект через [Vite](https://vitejs.dev/). Работает в 20 раз быстрее чем другие сборщики проектов.

В файле `main.js`

```javascript
import { createApp } from "vue";
import { init as OSOMUIInit } from "osom-ui";
import App from "./App.vue";


const app = createApp(App);

app.use(OSOMUIIni);
app.mount("#app");
```

Для подгрузки стилей в файле `App.vue` необходимо добавить стили в начале script

```javascript
import "osom-ui/style.css";
```

Пример можно посмотреть [здесь](https://bnipi-git-1.rosneft.ru/ISHZakirianov/osom-ui-example)
