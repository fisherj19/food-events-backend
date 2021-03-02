const users = {
    getAll: (req, res) => {
      const pool = req.app.get('pool');
      const qryStr = `
        select id,
          first-name,
          last-name,
          email
        from events.event.user
      `;
  
      pool.select(res, qryStr);
    },
};

module.exports = users;
