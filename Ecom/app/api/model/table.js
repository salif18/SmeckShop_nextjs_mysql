// CREATE TABLE clients (
//     id VARCHAR(9) PRIMARY KEY,
//     nom VARCHAR(255) NOT NULL,
//     prenom VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL,
//     numero VARCHAR(20) NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//     UNIQUE (email),
//     UNIQUE (numero)
//   );

// CREATE TABLE articles (
//     id VARCHAR(9) PRIMARY KEY,
//     nom VARCHAR(255) NOT NULL,
//     photo VARCHAR(255),
//     details TEXT,
//     categorie VARCHAR(255),
//     type VARCHAR(255),
//     prix_achat DECIMAL(10, 2) NOT NULL,
//     prix_vente DECIMAL(10, 2) NOT NULL,
//     stocks INT NOT NULL,
//     timestamps TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
//   );
  
// CREATE TABLE orders (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     clientId VARCHAR(9) NOT NULL,
//     amount INT NOT NULL,
//     status VARCHAR(50) DEFAULT 'En cours',
//     addresse TEXT,
//     timestamps TIMESTAMP DEFAULT, 
//     FOREIGN KEY (clientId) REFERENCES clients(id) ON DELETE CASCADE
//   );


// CREATE TABLE articles_buys (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     orderId INT NOT NULL,
//     articleId INT NOT NULL,
//     tailles varchar(5) NULL,	
//     qty INT NOT NULL,
//     prix DECIMAL(10, 2) NOT NULL,
//     FOREIGN KEY (orderId) REFERENCES orders(id) ON DELETE CASCADE,
//     FOREIGN KEY (articleId) REFERENCES articles(id) ON DELETE CASCADE
// );
