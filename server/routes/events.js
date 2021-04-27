const events = {
    getAll: (req, res) => {
        const pool = req.app.get('pool');
        const qryStr = `
            select id,
                event_creator_id,
                event_name,
                event_date,
                event_desc,
                event_location,
                food_desc,
                food_start_time,
                food_end_time,
                gluten_free,
                dairy_allergy,
                egg_allergy,
                gluten_allergy,
                nut_allergy,
                shellfish_allergy,
                halal,
                kosher,
                vegetarian,
                vegan,
                date_closed,
                event_closer_id,
                date_created,
                date_modified
            from events.food_event
            order by id asc limit 10
        `;

        pool.select(res, qryStr);
    },

    getById: (req, res) => {
        const pool = req.app.get('pool');
        const qryStr = `
            select id,
                event_creator_id,
                event_name,
                event_date,
                event_desc,
                event_location,
                food_desc,
                food_start_time,
                food_end_time,
                gluten_free,
                halal,
                kosher,
                vegetarian,
                vegan,
                dairy_allergy,
                egg_allergy,
                gluten_allergy,
                nut_allergy,
                shellfish_allergy,
                date_closed,
                event_closer_id,
                date_created,
                date_modified
            from events.food_event
            where id = $1
        `;
        
        const params = new Array(req.params.id);

    pool.selectOne(res, qryStr, params, 'food event');
  },

  insert: (req, res) => {
    const pool = req.app.get('pool');
    const qryStr = `
      insert into events.food_event (
                id,
                event_creator_id,
                event_name,
                event_date,
                event_desc,
                event_location,
                food_desc,
                food_start_time,
                food_end_time,
                gluten_free,
                halal,
                kosher,
                vegetarian,
                vegan,
                dairy_allergy,
                egg_allergy,
                gluten_allergy,
                nut_allergy,
                shellfish_allergy,
                date_closed,
                event_closer_id,
                date_created,
                date_modified
      ) values (
        ...values...
      )
    `;
    const params = [
      res.locals._current_event_id,
      res.locals._current_event_name,
      res.locals._current_event_date,
      res.locals._current_event_time,
      res.locals._current_event_location,
      req.body.gluten_free || false,
      req.body.halal || false,
      req.body.kosher || false,
      req.body.vegetarian || false,
      req.body.vegan || false,
      req.body.dairy_allergy || false,
      req.body.egg_allergy || false,
      req.body.gluten_allergy || false,
      req.body.nut_allergy || false,
      req.body.shellfish_allergy || false,
    ];

    pool.insert(res, qryStr, params);
  }
};

module.exports = events;
