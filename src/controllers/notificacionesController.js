const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM messages WHERE status = \'1\'', (err, menEnv) => {
     if (err) {
      res.json(err);
     }
     res.render('notificaciones', {
        data: menEnv  
     });
    });
  });
};



controller.env = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM inquilino ', (err, inquilinos) => {
     if (err) {
      res.json(err);
     }
     res.render('notificacionesEnv', {
        data: inquilinos  
     });
    });
  });
};


/*
controller.listyears = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT DISTINCT YEAR(fecha) FROM pago;', (err, years) => {
     if (err) {
      res.json(err);
     }
     res.render('reportes', {
        data: years  
     });
    });
  });
};


controller.listmonths = (req, res) => {
  const { year } = req.params;
  req.getConnection((err, conn) => {
    conn.query('SELECT DISTINCT MONTH(fecha) FROM pago WHERE YEAR(fecha) = ? ;', [year],  (err, months) => {
     if (err) {
      res.json(err);
     }
     res.render('reportes', {
        data: months  
     });
    });
  });
};

*/
module.exports = controller;
