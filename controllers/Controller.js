const controller = {};


controller.get = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM funcionario', (err, funcionario) => {
     if (err) {
      res.json(error);
     }
     res.render('funcionario_List', {
        data: funcionario
     });
    });
  });
};


controller.init = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM funcionario', (err, funcionario) => {
     if (err) {
      res.json(err);
     }
     res.render('funcionario', {
        data: funcionario
     });
    });
  });
};





controller.post = (req, res) => {
  const data = req.body;
  
  console.log(data)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO funcionario set ?', data, (err, funcionario) => {
      console.log(funcionario)

    
      swal("Hello world!");
     res.redirect('/');
     
    })
  })
  
};


controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM funcionario WHERE id = ?", [id], (err, rows) => {
      res.render('funcionario_edit', {
        data: rows[0]
      })
    });
  });
};

controller.put = (req, res) => {
  const { id } = req.params;
  const newFuncionario = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE funcionario set ? where id = ?', [newFuncionario, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM funcionario WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
