# Личный проект «Cat Energy»

[![Project check][check-image]][check-url]

---

<a href="https://htmlacademy.ru"><img align="right" width="60" height="60" alt="HTML Academy" src="https://raw.githubusercontent.com/htmlacademy-adaptive/2282555-cat-energy-28/master/source/icons/htmlacademy.svg"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[HTML и CSS. Адаптивная вёрстка и автоматизация](https://htmlacademy.ru/intensive/adaptive)» от [HTML Academy](https://htmlacademy.ru).

* Студент: [Ева Микляева](https://up.htmlacademy.ru/adaptive/28/user/2282555).
* Наставник: [Сергей Артемов](https://htmlacademy.ru/profile/firefoxic).

---

В корне проекта находятся только его конфиги. А также [Contributing.md](Contributing.md) — полезное руководство по внесению изменений.

Исходные файлы вёрстки должны лежать в `source/`.

Собирается проект в `build/`.

---

## Установка зависимостей проекта

Сложная сборка в этом проекте не заведётся без дополнительных инструментов — зависимостей. Поэтому их необходимо установить.

### 1. Терминал

Для установки зависимостей понадобится терминал. В Linux и macOS он уже есть, а в Windows лучше установить _git-bash_, который идёт в комплекте с самим [Git](https://git-scm.com/download/windows).

### 2. Node.js

Зависимости работают в среде _node.js_, которую тоже нужно установить, но лучше не с помощью установщика с сайта, а через менеджер версий ноды. Есть разные менеджеры, но проще всего установить и использовать [_volta_](https://volta.sh/).

Для установки _volta_ в Linux и macOS в терминале выполни:

```shell
curl https://get.volta.sh | bash
```

В Windows проще скачать и запустить [установщик](https://github.com/volta-cli/volta/releases/download/v1.1.1/volta-1.1.1-windows-x86_64.msi).

После установки _volta_ перезапусти (или просто открой новый) терминал и выполни установку _node.js_ свежей LTS версии (на данный момент 18.16.0):

```shell
volta install node
```

### 3. Зависимости

Вместе с нодой стал доступен её менеджер пакетов — _npm_. Но в проекте используется его альтернатива — _pnpm_. Установи его через _volta_:[^1]

```shell
volta install pnpm
```

[^1]: В Windows эта команда может завершиться с ошибкой (_pnpm_ не установится). В таком случае в настройках системы нужно включить режим «Для разработчика» (официальная [инструкция](https://learn.microsoft.com/ru-ru/windows/apps/get-started/enable-your-device-for-development#accessing-settings-for-developers)), перезагрузиться и заново запустить команду.

После этого для установки зависимостей проекта в терминале, находясь в директории проекта, выполни:[^2]

```shell
pnpm i
```

[^2]: **Не** обращай внимание на предупреждения во время установки.

После установки зависимостей становится доступным любой pnpm-скрипт проекта. Все доступные скрипты можно посмотреть выполнив:

```shell
pnpm run
```

Но чаще остальных используются два:

1. Линтинг — последовательная проверка кода пятью линтерами:

	```shell
	pnpm lint
	```

2. Cборка для разработки, при которой запустится и локальный сервер в папке `build/`, в которую собирается проект из папки `source/`, а в брауезере откроется разрабатываемый сайт и будет обновляться при обновлении файлов в проекте:

	```shell
	pnpm start
	```

[check-image]: https://github.com/htmlacademy-adaptive/2282555-cat-energy-28/workflows/Project%20check/badge.svg?branch=master
[check-url]: https://github.com/htmlacademy-adaptive/2282555-cat-energy-28/actions
