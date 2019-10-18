exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("appointments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("appointments").insert([
        
          {
            "type": "Dolore laborum labore excepteur adipisicing tempor qui ex excepteur.",
            "user_id": 4
          },
          {
            "type": "Tempor adipisicing exercitation enim voluptate anim aute mollit.",
            "user_id": 1
          },
          {
            "type": "Dolore laborum reprehenderit non Lorem tempor voluptate cupidatat.",
            "user_id": 14
          },
          {
            "type": "Amet voluptate sunt nostrud tempor aliqua ea dolor nulla magna tempor veniam labore.",
            "user_id": 18
          },
          {
            "type": "Non ut exercitation sint duis do laboris do fugiat aliquip id.",
            "user_id": 12
          },
          {
            "type": "Aliquip eiusmod nostrud excepteur mollit enim laborum commodo.",
            "user_id": 12
          },
          {
            "type": "Est culpa ipsum ut commodo consectetur fugiat tempor pariatur deserunt anim.",
            "user_id": 5
          },
          {
            "type": "Est duis laboris incididunt duis eu.",
            "user_id": 7
          },
          {
            "type": "Ex excepteur nulla nostrud elit ea ipsum ea in veniam.",
            "user_id": 11
          },
          {
            "type": "Sit sit labore voluptate nulla eiusmod velit magna esse et duis consectetur ea labore et.",
            "user_id": 9
          },
          {
            "type": "Ex excepteur sunt Lorem ad minim proident nostrud commodo pariatur Lorem.",
            "user_id": 3
          },
          {
            "type": "Ea magna consectetur velit est exercitation aliquip ipsum voluptate voluptate id laborum.",
            "user_id": 2
          },
          {
            "type": "Ullamco aliquip reprehenderit proident et.",
            "user_id": 20
          },
          {
            "type": "Aliquip velit deserunt dolore nostrud.",
            "user_id": 5
          },
          {
            "type": "Culpa quis anim elit non ea proident nulla mollit ad reprehenderit laboris.",
            "user_id": 10
          },
          {
            "type": "Elit laborum officia eu ea incididunt voluptate.",
            "user_id": 16
          },
          {
            "type": "Nostrud elit laboris aute eiusmod voluptate commodo nostrud ad exercitation ut qui.",
            "user_id": 8
          },
          {
            "type": "Pariatur mollit laboris est pariatur minim ad et officia id tempor elit dolore.",
            "user_id": 2
          },
          {
            "type": "Incididunt consectetur anim laborum fugiat ex fugiat consectetur dolore ex amet.",
            "user_id": 8
          },
          {
            "type": "Id magna ipsum velit nulla magna elit velit duis nostrud aute consequat sint est.",
            "user_id": 14
          },
          {
            "type": "Nulla veniam ullamco cillum mollit esse esse laborum et dolore Lorem ipsum irure.",
            "user_id": 9
          },
          {
            "type": "Dolore minim duis minim ut qui sunt consectetur do sint laboris mollit.",
            "user_id": 15
          },
          {
            "type": "Dolore excepteur pariatur aliquip incididunt incididunt irure consequat velit.",
            "user_id": 14
          },
          {
            "type": "Commodo sint et consectetur ut est.",
            "user_id": 16
          },
          {
            "type": "Sunt officia ut elit commodo est labore qui reprehenderit Lorem.",
            "user_id": 11
          },
          {
            "type": "Incididunt pariatur eiusmod reprehenderit elit dolor reprehenderit irure ullamco.",
            "user_id": 7
          },
          {
            "type": "Eiusmod excepteur sint qui quis consequat cillum minim sint.",
            "user_id": 1
          },
          {
            "type": "Cillum labore ad laborum culpa velit tempor et eu dolor pariatur minim.",
            "user_id": 3
          },
          {
            "type": "Sunt eu qui enim deserunt nostrud culpa ullamco ex sint voluptate consequat pariatur minim mollit.",
            "user_id": 16
          },
          {
            "type": "Eiusmod est laboris dolore commodo tempor incididunt.",
            "user_id": 19
          }
        ]);
    });
};
