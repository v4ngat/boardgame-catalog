console.log('script.js підключено') // перевірка підключення до сторінки
// Даний нам масив ігор який має title (назву), мінімальну та максимальну кількість гравців (minPlayers та maxPlayers - відповідно)
const games = [
    { title: 'Аліас', minPlayers: 4, maxPlayers: 16 },
    { title: 'Магія слів', minPlayers: 2, maxPlayers: 4 },
    { title: 'Зона. Таємниці Чорнобиля', minPlayers: 1, maxPlayers: 4 },
    { title: 'Кодові імена: Гра слів', minPlayers: 2, maxPlayers: 8 },
    { title: 'Острів котів', minPlayers: 1, maxPlayers: 4 }];
// Перевірка на те: чи гра розрахована на n гравців. True, якщо n у діапазоні min-max
const fitsPlayers = (game, n) => n >= game.minPlayers && n <= game.maxPlayers;
// Проходить по всіх іграх, виводить, які підходять для n гравців, а які ні. Також повертає кількість ігор, що підходять
function showGames (n){
    console.log(`Ігри для ${n} гравців: `);
    let count = 0;
    for (const game of games) {
        if (fitsPlayers(game, n)) {
            console.log(`  + ${game.title} (${game.minPlayers}–${game.maxPlayers})`);
            count++;
        } else {
            console.log(`  - ${game.title} не підходить (${game.minPlayers}–${game.maxPlayers})`);
        }
    }
    console.log(`Підходить ${count} з ${games.length} ігор`);
    return count;
}
// Виклики для перевірки
showGames(1);
showGames(2);
showGames(4);
showGames(8);
showGames(16);
console.log('Аліас на 3 гравців?', fitsPlayers(games[0], 3));