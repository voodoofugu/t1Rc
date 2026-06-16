# t1Rc

`t1Rc` — это React-прослойка для разработки фронтенда проекта `titans`. Проект собран как рабочее демо-окружение, где страницы и попапы удобно тестируются в изоляции, но на реальных ресурсах из `titans_rc`.

## О проекте

- Это не просто шаблон, а интерфейсная оболочка для разработки фронтенда Titans.
- `titans_rc` содержится рядом и даёт реальные ресурсы, стили, картинки и ассеты.
- `demo-workbench` работает как локальный билд/демо-менеджер и помогает быстро переключаться между страницами и попапами.
- `nexus` (`nexus-state`) обеспечивает глобальный стейт и действия, которые используются во всём приложении.

## Инициализация submodule `titans_rc`

```bash
git submodule update --init --recursive
```

## Как это устроено

- `src/` — основной React-код.
- `src/components/templateComponents/App.jsx` — корневой компонент, который рендерит `DemoWorkbench`.
- `src/components/projetComponents/` — страницы, попапы и UI-компоненты Titans.
- `nexus/` — глобальный стейт-менеджер: `nexus/nexusConfig.ts`, `nexus/actions`, `nexus/states`.
- `titans_rc/` — оригинальные ресурсы проекта Titans: `img`, `styles`, `html` и т.д.
- `demo-workbench/` библиотека используется для отображения страницы/стиля/навигации внутри демо.
- `conf/` и `webpack.config.ts` — сборка и резолверы, которые прокидывают `titans_rc` и `demo-workbench` в сборку.

## Что делает `demo-workbench`

- Загружает страницы по имени через `demoLoader`.
- Загружает CSS-стили через `styleLoader`.
- Подключает базовые файлы CSS (`baseCssFiles`).
- Отвечает за удобный интерфейс демо, переключение страниц и проверку UI.

## Роль `nexus`

- `nexus` управляет глобальным состоянием приложения.
- Содержит состояния `activePage`, `popupState`, `notif`, `warpop`, `pageData` и другие.
- Действия (`acts`) хранятся в `nexus/actions`, например `handlePopup`.
- Компоненты читают и изменяют состояние через `nexus.use`, `nexus.set`, `nexus.acts`.

## Быстрый старт

```bash
npm install
npm run start
```

Для сборки стилей:

```bash
npm run compileStyles
npm run compileStyles:watch
```

Для проверки кода:

```bash
npm run lint
```

## Почему это полезно

`t1Rc` делает фронтенд-разработку Titans быстрее и чище:

- можно развивать страницы и попапы отдельно от основного проекта;
- используются реальные ресурсы и стили из `titans_rc`;
- есть наглядный демо-панель через `demo-workbench`;
- стейт-инфраструктура хранится централизованно в `nexus`.

## Полезные ссылки

- `nexus-state` — [глобальный стейт-менеджер](https://github.com/voodoofugu/nexus-state).
- `demo-workbench` — [демо-менеджер](https://github.com/voodoofugu/demo-workbench).
- `morphing-scroll` — [библиотека сколла](https://github.com/voodoofugu/morphing-scroll).
