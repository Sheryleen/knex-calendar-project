exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("appointments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("appointments").insert([
        {
          agenda: "Consequat culpa ipsum ea ex aliquip.",
          user_id: 1
        },
        {
          agenda: "Non nulla aliqua laboris ex amet esse quis ea.",
          user_id: 2
        },
        {
          agenda: "Dolore culpa culpa enim nisi laborum ut et irure.",
          user_id: 3
        },
        {
          agenda:
            "Voluptate qui adipisicing reprehenderit reprehenderit aliqua dolore.",
          user_id: 4
        },
        {
          agenda: "Reprehenderit adipisicing non cillum eu non laborum.",
          user_id: 5
        },
        {
          agenda: "Adipisicing cupidatat do amet officia aliqua.",
          user_id: 6
        },
        {
          agenda: "Velit ea adipisicing exercitation excepteur cupidatat.",
          user_id: 7
        },
        {
          agenda:
            "Commodo et culpa nostrud nulla ipsum voluptate non aliquip nostrud id enim ex anim ullamco.",
          user_id: 8
        },
        {
          agenda: "Velit ea laborum qui irure.",
          user_id: 9
        },
        {
          agenda: "Dolor ex sit eiusmod in ut mollit consectetur non.",
          user_id: 10
        },
        {
          agenda:
            "Eu nulla esse irure adipisicing sint duis pariatur est laborum tempor nulla incididunt sit consectetur.",
          user_id: 11
        },
        {
          agenda: "Ea anim sint non voluptate id eu esse.",
          user_id: 12
        },
        {
          agenda:
            "Exercitation proident mollit ullamco qui ut eiusmod duis do duis officia nostrud est.",
          user_id: 13
        },
        {
          agenda:
            "Est aute laboris sit eiusmod ut aute laborum incididunt veniam ex.",
          user_id: 14
        },
        {
          agenda:
            "Aliquip culpa consequat Lorem Lorem cupidatat ad ut voluptate ea occaecat ad do sint.",
          user_id: 15
        }
      ]);
    });
};
