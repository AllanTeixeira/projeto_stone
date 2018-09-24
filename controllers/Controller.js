const controller = {};


//Realização a conexão com o Banco de Dados e traz um array dos Funcionários para ser exibido na page Lista Funcionário
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

// Função de Inicialização e Conexão com o Bancos de Dados
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




// Função Post: Salva um novo funcionário no banco de dados
controller.post = (req, res) => {
  const data = req.body;

  console.log(data);

  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO funcionario set ?', data, (err, funcionario) => {
      console.log(funcionario);
     res.redirect('/');
     
    })
  })
  log.info('Funcionário cadastrado com sucesso');
};


// Função Edit: Seleciona o funcionário para ser exibido na Page Edit
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

// Função Put: faz as alterações em um determinado funcionário a partir do seu ID.
controller.put = (req, res) => {
  const { id } = req.params;
  const newFuncionario = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE funcionario set ? where id = ?', [newFuncionario, id], (err, rows) => {
    res.redirect('/');
  });
  });

  log.info('Funcionário editado com sucesso!');
};

// Função Delete: apaga um funcionário cadastrado a partir do seu ID.
controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM funcionario WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });

  log.info('Funcionário deletado com sucesso!');
}

module.exports = controller;
