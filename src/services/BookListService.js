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
