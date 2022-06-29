const fs = require('fs');
// 'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const myWords = await fs.readFileSync('fixtures/abridged_word_list.txt', 'utf-8').split('\n');
    const resultWord = myWords.map((name) => ({
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Words', resultWord);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
