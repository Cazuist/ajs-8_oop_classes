import Character from '../Character';

describe('Начинаем тестирование класса Character', () => {
  describe('Тестируем ошибки ', () => {
    test.each([
      [1, 'Bowman', 'Имя персонажа должно быть строкой!'],
      ['1', 'Bowman', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
      ['12345678910', 'Bowman', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
      ['12', 'Bom', 'Неизвестный тип персонажа!'],
    ])(
      ('Для параметров (%s, %s) должен вернуть "%s"'),
      (name, type, expected) => {
        expect(() => new Character(name, type)).toThrow(expected);
      },
    );
  });

  describe('Тестируем состав объекта', () => {
    const char = new Character('123', 'Bowman');
    const className = char.constructor.name;

    test('Должен вернуть экземпляр класса Character', () => {
      expect(className).toBe('Character');
    });

    test('Должен вернуть level=1 и health=100', () => {
      const { level } = char;
      const { health } = char;

      expect([level, health]).toEqual([1, 100]);
    });

    test.each([
      ['Bowman', 'Bowman'],
      ['Swordsman', 'Swordsman'],
      ['Magician', 'Magician'],
      ['Daemon', 'Daemon'],
      ['Undead', 'Undead'],
      ['Zombie', 'Zombie'],
    ])(
      ('Для параметра типа %s должен вернуть "%s"'),
      (type, expected) => {
        const char1 = new Character('test', type);

        expect(char1.type).toBe(expected);
      },
    );

    test.each([
      ['Bowman', { attack: 25, defence: 25 }],
      ['Swordsman', { attack: 40, defence: 10 }],
      ['Magician', { attack: 10, defence: 40 }],
      ['Daemon', { attack: 25, defence: 25 }],
      ['Undead', { attack: 40, defence: 10 }],
      ['Zombie', { attack: 10, defence: 40 }],
    ])(
      ('Для персонажа %s должен вернуть параметр атаки'),
      (type, expected) => {
        const char2 = new Character('test', type);
        const { attack } = char2;

        expect(attack).toBe(expected.attack);
      },
    );

    test.each([
      ['Bowman', { attack: 25, defence: 25 }],
      ['Swordsman', { attack: 40, defence: 10 }],
      ['Magician', { attack: 10, defence: 40 }],
      ['Daemon', { attack: 25, defence: 25 }],
      ['Undead', { attack: 40, defence: 10 }],
      ['Zombie', { attack: 10, defence: 40 }],
    ])(
      ('Для персонажа %s должен вернуть параметр защиты'),
      (type, expected) => {
        const char3 = new Character('test', type);
        const { defence } = char3;

        expect(defence).toBe(expected.defence);
      },
    );
  });
});
