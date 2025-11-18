/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("problems").del();
  await knex("problems").insert([
    {
      title: "エクセルが機能しません。",
      description: "SUM関数がかけません。",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTBUDIYA3NqI3GndowHTh-oZf4TAm99PEgmUl09jar-wkO4DPM9FX8sPOQeH5VN7uBKmG8qpkaNiS4NDZlBCLiyoGsTS8TUuw36gMtMcA0kF83EY7tIyS3yqAegpe9yv1YEqXV0bINz0WX/s180-c/onepiece14_enel.png",
    },
    {
      title: "パワーアップすが動きません。",
      description: "在庫管理アプリが動かない。",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8v_HjCvRoh3UssgZFoJdUjFoQHpWLt3YQejUT3C3lwJN3k-gHaslqdPUY-rG3_n8J9G5e6yQLcOWeqGDXQMD3xD8HL7ERldtL3joAaw9KI3CSLlrRdbzX35UE-UjvJcclz0uPpBoNhBvi/s180-c/onepiece18_linlin_kaido.png",
    },
    {
      title: "PCが起動しません。",
      description: "原因不明",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguclVUy3ZqT87uuA3v-T8cwnYHnlz1V5yZlLRMjTUOEwOtqQCExPQM83ZQoNNFPlMhL3gQyWtmZEnVoDtIfUB3iiaZE88UDFCGI0vtBX4SsZUcyn4mCSSY1rHZ8HTGqhr-Dka_T84bL9q_/s180-c/onepiece12_buggy.png",
    },
  ]);
};
