export default class BookListService {
  data = [
    {
      id: 1,
      name: "Робинзон Крузо",
      author: "Даниэль Дефо",
      genre: "Приключения",
      photo: "https://cdn1.ozone.ru/s3/multimedia-2/c1200/6008886746.jpg"
    },
    {
      id: 2,
      name: "Таинственный остров",
      author: "Жюль Верн",
      genre: "Приключения",
      photo: "https://cdn1.ozone.ru/multimedia/1014814038.jpg"
    },
    {
      id: 3,
      name: "Тайна леди Одли",
      author: "Мэри Элизабет Брэддон",
      genre: "Детектив",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1011008937.jpg"
    },
    {
      id: 4,
      name: "Ловкачи",
      author: "Александр Апраксин",
      genre: "Детектив",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1000511731.jpg"
    },
    {
      id: 5,
      name: "Корабль-призрак",
      author: "Фредерик Марриет",
      genre: "Фантастика",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1027982965.jpg"
    },
    {
      id: 6,
      name: "Мисс Страна. Чудовище и красавица",
      author: "Алла Лагутина",
      genre: "Фантастика",
      photo:
        "https://cv4.litres.ru/pub/c/elektronnaya-kniga/cover_330/25746942-alla-lagutina-miss-strana-chudovische-i-krasavica.jpg"
    },
    {
      id: 7,
      name: "Девушка в поезде",
      author: "Хокинс Пола",
      genre: "Триллер",
      photo: "https://cdn1.ozone.ru/s3/multimedia-3/c1200/6006425967.jpg"
    },
    {
      id: 8,
      name: 'Убийство в "Восточном экспрессе"',
      author: "Кристи Агата",
      genre: "Детектив",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1020629469.jpg"
    },
    {
      id: 9,
      name: "Безмолвный пациент",
      author: "Михаэлидес Алекс",
      genre: "Триллер",
      photo: "https://cdn1.ozone.ru/s3/multimedia-d/c1200/6008291173.jpg"
    },
    {
      id: 10,
      name: "Дом странных детей",
      author: "Риггс Рэнсом",
      genre: "Фантастика",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1021445333.jpg"
    },
    {
      id: 11,
      name: "Разбивая волны",
      author: "Лонсдейл Кэрри",
      genre: "Роман",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1036429766.jpg"
    },
    {
      id: 12,
      name: "День, когда я тебя найду",
      author: "Джуэлл Лайза",
      genre: "Роман",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1025787424.jpg"
    },
    {
      id: 13,
      name: "Три метра над небом. Трижды ты",
      author: "Моччиа Федерико",
      genre: "Роман",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1026944246.jpg"
    },
    {
      id: 14,
      name: "Уильям Шекспир. Трагедии",
      author: "Уильям Шекспир",
      genre: "Поэзия",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1008090252.jpg"
    },
    {
      id: 15,
      name: "Непоэмание",
      author: "Вера Полозкова",
      genre: "Поэзия",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1008339635.jpg"
    },
    {
      id: 16,
      name: "Ромео и Джульетта",
      author: "Уильям Шекспир",
      genre: "Поэзия",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1003151689.jpg"
    },
    {
      id: 17,
      name: "А. С. Пушкин. Полное собрание сочинений в десяти томах. Том 7",
      author: "Пушкин Александр Сергеевич",
      genre: "Поэзия",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1000207230.jpg"
    },
    {
      id: 18,
      name: "Исповедь хулигана",
      author: "Есенин Сергей",
      genre: "Поэзия",
      photo: "https://cdn1.ozone.ru/multimedia/c1200/1024199555.jpg"
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 2000);
    });
  }
}
