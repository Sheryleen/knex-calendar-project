exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      
      // Inserts seed entries
      return knex("users").insert([
        
          {
            "first_name": "Melinda",
            "last_name": "Juarez",
            "email": "melindajuarez@moltonic.com",
            "location": "Gink",
            "password": "elit"
          },
          {
            "first_name": "Rosemary",
            "last_name": "Rodriquez",
            "email": "rosemaryrodriquez@gink.com",
            "location": "Lexicondo",
            "password": "est"
          },
          {
            "first_name": "Cara",
            "last_name": "Cox",
            "email": "caracox@lexicondo.com",
            "location": "Satiance",
            "password": "in"
          },
          {
            "first_name": "Pratt",
            "last_name": "Knight",
            "email": "prattknight@satiance.com",
            "location": "Overfork",
            "password": "non"
          },
          {
            "first_name": "Isabel",
            "last_name": "Shepard",
            "email": "isabelshepard@overfork.com",
            "location": "Vertide",
            "password": "aliqua"
          },
          {
            "first_name": "Elvira",
            "last_name": "Weiss",
            "email": "elviraweiss@vertide.com",
            "location": "Zork",
            "password": "nulla"
          },
          {
            "first_name": "Carol",
            "last_name": "Stark",
            "email": "carolstark@zork.com",
            "location": "Dyno",
            "password": "duis"
          },
          {
            "first_name": "Fay",
            "last_name": "Wilkins",
            "email": "faywilkins@dyno.com",
            "location": "Kaggle",
            "password": "deserunt"
          },
          {
            "first_name": "Rosario",
            "last_name": "Valencia",
            "email": "rosariovalencia@kaggle.com",
            "location": "Mantro",
            "password": "pariatur"
          },
          {
            "first_name": "Willie",
            "last_name": "Berg",
            "email": "willieberg@mantro.com",
            "location": "Kindaloo",
            "password": "non"
          },
          {
            "first_name": "Rasmussen",
            "last_name": "Mcfadden",
            "email": "rasmussenmcfadden@kindaloo.com",
            "location": "Geekko",
            "password": "culpa"
          },
          {
            "first_name": "Ortega",
            "last_name": "Reyes",
            "email": "ortegareyes@geekko.com",
            "location": "Quility",
            "password": "laborum"
          },
          {
            "first_name": "Sparks",
            "last_name": "Montgomery",
            "email": "sparksmontgomery@quility.com",
            "location": "Duoflex",
            "password": "ex"
          },
          {
            "first_name": "Mcknight",
            "last_name": "Blackburn",
            "email": "mcknightblackburn@duoflex.com",
            "location": "Tersanki",
            "password": "quis"
          },
          {
            "first_name": "Silva",
            "last_name": "Oneil",
            "email": "silvaoneil@tersanki.com",
            "location": "Terrago",
            "password": "est"
          }
        
      ]);
    });
};
