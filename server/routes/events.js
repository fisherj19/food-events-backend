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
        ...columns...
      ) valuse (
        ...values...
      )
    `;
    const params = [
      // form fields to fill the values
    ];

    pool.insert(res, qryStr, params);
  }
};

module.exports = events;
