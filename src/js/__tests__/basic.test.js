import orderByProps from "../app";
import destructarisationObject from "../basic";

test("Сортируется неверно", () => {
  const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };
  const array = ["name", "level"];
  const correctOutput = [
    { item: "name", value: "мечник" },
    { item: "level", value: 2 },
    { item: "attack", value: 80 },
    { item: "defence", value: 40 },
    { item: "health", value: 10 },
  ];
  expect(orderByProps(obj, array)).toEqual(correctOutput);
});

test("Деструктаризация", () => {
  const object = {
    name: "Лучник",
    type: "Bowman",
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: "Двойной выстрел",
        icon: "http://...",
        description: "Двойной выстрел наносит двойной урон",
      },
      {
        id: 9,
        name: "Нокаутирующий удар",
        icon: "http://...",
      },
    ],
  };
  const expected = [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      description: "Описание недоступно",
    },
  ];
  expect(destructarisationObject(object)).toEqual(expected);
});
