const users = {
    getAll: (req, res) => {
      const pool = req.app.get('pool');
      const qryStr = `
      select id,
        first_name,
        last_name,
        email
    from events.event_user
    `;
        
      pool.selectOne(res, qryStr);
    }
  };
  
  module.exports = events;
  