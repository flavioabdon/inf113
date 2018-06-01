
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '123',
  port: 3306,
  //base de datos alquileres
  database: 'alquileres'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
