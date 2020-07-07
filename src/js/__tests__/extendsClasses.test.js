import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';

describe('Начинаем тестирование расширяемых классов', () => {
  describe('Тестируем ошибки классов', () => {
    describe('Тестируем ошибки класса Bowman', () => {
      test.each([
        [1, 'Имя персонажа должно быть строкой!'],
        ['1', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
        ['12345678910', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
      ])(
        ('Для имени персонажа %s должен вернуть "%s"'),
        (name, expected) => {
          expect(() => new Bowman(name)).toThrow(expected);
        },
      );
    });

    describe('Тестируем ошибки класса Swordsman', () => {
      test.each([
        [1, 'Имя персонажа должно быть строкой!'],
        ['1', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
        ['12345678910', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
      ])(
        ('Для имени персонажа %s должен вернуть "%s"'),
        (name, expected) => {
          expect(() => new Swordsman(name)).toThrow(expected);
        },
      );
    });

    describe('Тестируем ошибки класса Magician', () => {
      test.each([
        [1, 'Имя персонажа должно быть строкой!'],
        ['1', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
        ['12345678910', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
      ])(
        ('Для имени персонажа %s должен вернуть "%s"'),
        (name, expected) => {
          expect(() => new Magician(name)).toThrow(expected);
        },
      );
    });

    describe('Тестируем ошибки класса Daemon', () => {
      test.each([
        [1, 'Имя персонажа должно быть строкой!'],
        ['1', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
        ['12345678910', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
      ])(
        ('Для имени персонажа %s должен вернуть "%s"'),
        (name, expected) => {
          expect(() => new Daemon(name)).toThrow(expected);
        },
      );
    });

    describe('Тестируем ошибки класса Undead', () => {
      test.each([
        [1, 'Имя персонажа должно быть строкой!'],
        ['1', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
        ['12345678910', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
      ])(
        ('Для имени персонажа %s должен вернуть "%s"'),
        (name, expected) => {
          expect(() => new Undead(name)).toThrow(expected);
        },
      );
    });

    describe('Тестируем ошибки класса Zombie', () => {
      test.each([
        [1, 'Имя персонажа должно быть строкой!'],
        ['1', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
        ['12345678910', 'Имя персонажа должно быть не менее 2 и не более 10 символов!'],
      ])(
        ('Для имени персонажа %s должен вернуть "%s"'),
        (name, expected) => {
          expect(() => new Zombie(name)).toThrow(expected);
        },
      );
    });
  });

  describe('Тестируем состав объектов', () => {
    test.each([
      [Bowman, 'Bowman'],
      [Swordsman, 'Swordsman'],
      [Magician, 'Magician'],
      [Daemon, 'Daemon'],
      [Undead, 'Undead'],
      [Zombie, 'Zombie'],
    ])(
      ('Должен вернуть имя родительского конструктора'),
      (ClassName) => {
        const char = new ClassName('test');
        // eslint-disable-next-line no-proto
        const protoName = char.__proto__.__proto__.constructor.name;

        expect(protoName).toBe('Character');
      },
    );

    test.each([
      [Bowman, 'Bowman'],
      [Swordsman, 'Swordsman'],
      [Magician, 'Magician'],
      [Daemon, 'Daemon'],
      [Undead, 'Undead'],
      [Zombie, 'Zombie'],
    ])(
      ('Для параметра конструктора "Тип" %s должен вернуть "%s"'),
      (ClassName, expected) => {
        const char = new ClassName('test');

        expect(char.type).toBe(expected);
      },
    );

    test.each([
      [Bowman, [1, 100]],
      [Swordsman, [1, 100]],
      [Magician, [1, 100]],
      [Daemon, [1, 100]],
      [Undead, [1, 100]],
      [Zombie, [1, 100]],
    ])(
      ('Для экземпляра класса %s должен вернуть level=1 и health=100'),
      (ClassName, expected) => {
        const char = new ClassName('test');

        expect([char.level, char.health]).toEqual(expected);
      },
    );

    test.each([
      [Bowman, { attack: 25, defence: 25 }],
      [Swordsman, { attack: 40, defence: 10 }],
      [Magician, { attack: 10, defence: 40 }],
      [Daemon, { attack: 25, defence: 25 }],
      [Undead, { attack: 40, defence: 10 }],
      [Zombie, { attack: 10, defence: 40 }],
    ])(
      ('Для экземпляра %s должен вернуть параметр атаки'),
      (ClassName, expected) => {
        const char = new ClassName('test');
        const { attack } = char;

        expect(attack).toBe(expected.attack);
      },
    );

    test.each([
      [Bowman, { attack: 25, defence: 25 }],
      [Swordsman, { attack: 40, defence: 10 }],
      [Magician, { attack: 10, defence: 40 }],
      [Daemon, { attack: 25, defence: 25 }],
      [Undead, { attack: 40, defence: 10 }],
      [Zombie, { attack: 10, defence: 40 }],
    ])(
      ('Для экземпляра %s должен вернуть параметр атаки'),
      (ClassName, expected) => {
        const char = new ClassName('test');
        const { defence } = char;

        expect(defence).toBe(expected.defence);
      },
    );
  });
});
