/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("merchants").del();
  await knex("merchants").insert([
    {
      id: 1,
      merchant_name: "Starbuck TTDI",
      phone_number: "0328569103",
      latitude: 3.1416932,
      longtitude: 101.6291597,
      is_active: true,
    },
    {
      id: 2,
      merchant_name: "Qureshi",
      phone_number: "0328569103",
      latitude: 3.1411279,
      longtitude: 101.6286612,
      is_active: true,
    },
    {
      id: 3,
      merchant_name: "POKOK KLÍ",
      phone_number: "0328569103",
      latitude: 3.1207963,
      longtitude: 101.6385387,
      is_active: false,
    },
  ]);
};
