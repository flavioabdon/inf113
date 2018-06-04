const controller = {};

controller.updateAmb = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE ambiente set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/ambiente');
  });
  });
};
controller.updateCon = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE contrato set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/contrato');
  });
  });
};
controller.updatePag = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE pago set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/pago');
  });
  });
};
controller.updateInq = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE inquilino set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/inquilino');
  });
  });
};

controller.editAmb = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM ambiente WHERE id = ?", [id], (err, rows) => {
      res.render('ambientes_edit', {
        data: rows[0]
      })
    });
  });
};
controller.editCon = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM contrato WHERE id = ?", [id], (err, rows) => {
      res.render('contratos_edit', {
        data: rows[0]
      })
    });
  });
};
controller.editPag = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM pago WHERE id = ?", [id], (err, rows) => {
      res.render('pagos_edit', {
        data: rows[0]
      })
    });
  });
};
controller.editInq = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM inquilino WHERE id = ?", [id], (err, rows) => {
      res.render('inquilinos_edit', {
        data: rows[0]
      })
    });
  });
};

controller.saveAmb = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO ambiente set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/ambiente');
    })
  })
};
controller.saveCon = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO contrato set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/contrato');
    })
  })
};
controller.savePag = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO pago set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/pago');
    })
  })
};
controller.saveInq = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO inquilino set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/inquilino');
    })
  })
};

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

controller.inicio = (req, res) => {
  req.getConnection((err, conn) => {
     res.render('customers');
  });
};

module.exports = controller;
