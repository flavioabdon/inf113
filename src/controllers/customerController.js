const controller = {};

controller.deleteAmb = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM ambiente WHERE id = ?', [id], (err, rows) => {
      res.redirect('/ambiente/');
    });
  });
}
controller.deleteCon = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM contrato WHERE id = ?', [id], (err, rows) => {
      res.redirect('/contrato/');
    });
  });
}
controller.deletePag = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM pago WHERE id = ?', [id], (err, rows) => {
      res.redirect('/pago/');
    });
  });
}
controller.deleteInq = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM inquilino WHERE id = ?', [id], (err, rows) => {
      res.redirect('/inquilino/');
    });
  });
}

controller.listarAmb = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM  ambiente', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('ambientesView', {
        data: customers
     });
    });
  });
};
controller.listarCon = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM  contrato', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('contratosView', {
        data: customers
     });
    });
  });
};
controller.listarPag = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM  pago', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('pagosView', {
        data: customers
     });
    });
  });
};
controller.listarInq = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM  inquilino', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('inquilinosView', {
        data: customers
     });
    });
  });
};
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
