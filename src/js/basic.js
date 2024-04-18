export default function destructarisationObject(obj) {
  const result = [];

  for (const special of obj.special) {
    const { description = "Описание недоступно", ...items } = special;
    result.push({ ...items, ...{ description } });
  }
  return result;
}
