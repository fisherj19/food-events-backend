const users = {
    getAll: (req, res) => {
        const pool = req.app.get('pool');
        const qryStr = `
            select id,
            email,
            first_name,
            last_name,
            phone as phoneNumber,
            notify_by_email,
            notify_by_text,
            gluten_free,
            halal,
            kosher,
            vegetarian,
            vegan,
            date_created,
            date_modified,
            banner_id as bannerID,
            is_admin as isAdmin
            from events.event_user
        `;
        pool.select(res, qryStr);
    },

    getById: (req, res) => {
        if (res.locals._current_user_id === req.params.id) {
            const pool = req.app.get('pool');
            const qryStr = `
              select id,
                email,
                first_name,
                last_name,
                phone as phoneNumber,
                notify_by_email,
                notify_by_text,
                gluten_free,
                halal,
                kosher,
                vegetarian,
                vegan,
                date_created,
                date_modified,
                banner_id as bannerID,
                is_admin as isAdmin
              from events.event_user
              where id = $1
            `;
            const params = [
              req.params.id
            ];

            pool.selectOne(res, qryStr, params, 'user');
        } else {
            res.status(403).send({ message: `You are not authorized to query someone else's record` });
        }
    },

    insert: (req, res) => {
      const pool = req.app.get('pool');
      const qryStr = `
        insert into events.event_user (
          id,
          email,
          first_name,
          last_name,
          phone,
          notify_by_email,
          notify_by_text,
          gluten_free,
          halal,
          kosher,
          vegetarian,
          vegan,
          date_created,
          date_modified,
          banner_id,
          is_admin
        ) values (
          $1,
          $2,
          $3,
          $4,
          $5,
          $6,
          $7,
          $8,
          $9,
          $10,
          $11,
          $12,
          $13,
          $13,
          $14,
          $15
        )
      `;
      const params = [
        res.locals._current_user_id,
        res.locals._current_user_name,
        req.body.displayName,
        req.body.last_name || '',
        req.body.phoneNumber,
        req.body.notify_by_email || false,
        req.body.notify_by_text || false,
        req.body.gluten_free || false,
        req.body.halal || false,
        req.body.kosher || false,
        req.body.vegetarian || false,
        req.body.vegan || false,
        new Date(),
        req.body.bannerID,
        req.body.isAdmin || false
      ];

      pool.insert(res, qryStr, params);
    }
};
  
module.exports = users;