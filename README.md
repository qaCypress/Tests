# Інструкція

**Крок 1: Встановлення Git**
1. Завантажте Git з офіційного сайту: https://git-scm.com/downloads
2. Запустіть виконуваний файл та встановіть Git, керуючись інструкціями на екрані.
3. Після успішної установки Git, відкрийте командний рядок Windows(щоб відкрити, треба ввести командку 'cmd' в Пуск), щоб перевірити, чи встановлено Git. Введіть команду git --version, щоб переконатися, що вона правильно працює.

**Крок 2: Встановлення Node.js**
1. Завантажте останню стабільну версію Node.js з офіційного сайту: https://nodejs.org
2. Запустіть виконуваний файл та встановіть Node.js, керуючись інструкціями на екрані.
3. Після успішної установки Node.js, відкрийте командний рядок та введіть команду node -v, щоб перевірити, чи встановлено Node.js. Також переконайтеся, що команда npm -v працює коректно.

**Крок 3: Встановлення Visual Studio Code**
1. Завантажте Visual Studio Code з офіційного сайту: https://code.visualstudio.com/download
2. Запустіть виконуваний файл та встановіть Visual Studio Code, керуючись інструкціями на екрані.

**Крок 4: Клонування репозиторію з Github**
1. Відкрийте термінал (командний рядок) або вікно команд в Visual Studio Code.
2. Скопіюйте URL-адресу репозиторію з Github.(https://www.dropbox.com/s/10u49nuk5em3bqg/1685292791800.jpg?dl=0)
3. Виконайте команду '**git clone <URL-адреса репозиторію>**', де <URL-адреса репозиторію> - це скопійований URL-адреса репозиторію. Після цього вас попросить під'єднатись до гітхаб аккаунту, зробіть це

**Крок 5: Запуск тестів**
1. Введіть команду '**cd Tests**' щоб перейти в папку з склонованим репозиторієм
2. Введіть команду '**npm install**' 
3. Введіть команду '**npm install cypress --save-dev**' 
4. Введіть команду '**npx cypress open**'
5. Оберіть '**E2e tests**' та відповідний файл

# Нотатки
 
 - Тести можна запускати декількома способами, '**npx cypress open**' відкриває окремий браузер де можна бачити як вони запускаються, також є команда '**npx cypress run --spec "cypress/e2e/PaymentCheck.cy.js**' яка буде запускати тести в терміналі, ви не будете бачити як вони відпрацьовують, але за допомогою цього способу вони працюють трохи швидше
 - Помилка про знайдений ключ виглядає приблизно так - [ключ](https://www.dropbox.com/s/4ofuamylgacr3dt/1685293680433.jpg?dl=0). Якщо вона так не виглядаэ, значить просто помилка в тесті
