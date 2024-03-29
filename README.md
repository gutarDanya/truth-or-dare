# Игра для весёлой компании 'Правда или действие'

## О проекте:
Правда или действие - очень известная игра для компаний, функионал которой довльно прост игроки по-очереди (или в случайном порядке) выбирают задачу - правду или действие. После чего выполняют случайно сгенерированную задачу, которые должны выполнить. Приложение является многостраничным сайтом с маршрутизацией на стороне клиента, написанном на JavaScript.

## Что уже сделанно:
Локальная версия проекта, в которую уже можно сыграть сдрузьями - ссылка на приложение находится в конце файла:
### Функционал:
* Выбор уровня сложности и откровенности задач
* Возможность добавить или удалить игрока. Функциональность сделана через localStorage, что бы при перезагрузке страницы список выбранных уровней не сбрасывался
* Активировать порядок ходов (случайный или последовательный). Функциональность сделана через localStorage, что бы при перезагрузке страницы список выбранных игроков не сбрасывался
* Возможность выбрать что выполнить - правду, действие или случайный выбор
* Возможность посмотреть список действий и правды

## Что планирую добавить или исправить:
* Соединение с сервером, что бы список действий и правды хранился на сервере и не перегружал устройство пользователя
* Добавить авторизацию и регистрацию
* Возможность добавлять или удалять свои задачи и задачи, которые есть "по-умолчанию"
* Добавить подписку на приложение
* Доработать градацию задач по возрастному рейтингу на +6 +12 +16 +18 +21
* Покрыть приложение тестами
* добавить валидацию форм

## Библиотеки, технологии и фреймворки:
* React - основная библиотека на которой написанно приложение
* Redux
* react-router-dom

## Что нужно сделать для установки проекта:
* Клонировать репозиторий ```git clone https://github.com/gutarDanya/truth-or-dare.git ```
* Установить необходимые зависимости:
```
npm i react
npm i redux
npm i react-router-dom
```
* Произвести запуск проекта:
``` npm run start ```

# [ссылка на gh-pages](http://gutarDanya.github.io/truth-or-dare)
