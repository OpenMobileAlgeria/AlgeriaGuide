 


function createdb() {
	



        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(populateDB, errorCB, successCB);
    s

}

    // Populate the database 
    //
      function populateDB(tx) {
    	
         tx.executeSql('DROP TABLE IF EXISTS DEMO');
         tx.executeSql('CREATE TABLE IF NOT EXISTS category (id unique, name text)');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "SOS")');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "HOPITAUX")');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (3, "BANQUES")');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (4, "ASSURANCES")');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (5, "HOTELS")');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (6, "RESTAURANTS")');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (7, "TRANSPORT AERIEN")');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (8, "TRANSPORT MARITIME")');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (9, "TRANSPORT FERROVIAIRE")');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (10, "TRANSPORT ROUTIERE")');
         tx.executeSql('INSERT INTO DEMO (id, data) VALUES (11, "DEPANNAGE")');
         
         
	       tx.executeSql("DROP TABLE IF EXISTS contact");
	       tx.executeSql('CREATE TABLE  IF NOT EXISTS  contact ('
	    			  + 'id integer primary key autoincrement,'
	    			  + 'name text,'
	    			  + 'address text,'
	    			  + 'tel1 text,'
	    			  + 'tel2 text,'
	    			  + 'tel3 text,'
	    			  + 'eamil text,'
	    			  + 'website text,'
	    			  + 'catergory integer,'
	    			  + 'wilaya text'
	    			  + ')');
	       
		   tx.executeSql('INSERT INTO contact (name,address,tel1,tel2,tel3,eamil,website,catergory,wilaya) VALUES ("name","address","tel1","tel2","tel3","eamil","website",2,"wilaya")');
		   tx.executeSql('INSERT INTO contact (name,address,tel1,tel2,tel3,eamil,website,catergory,wilaya) VALUES  ( "CHU Aït Idir", "Rue Haddad Abderazak, Bab Djedid - Casbah - Alger", "021.62.99.48", "", "", "", "", 2, "Alger")');
		   tx.executeSql('INSERT INTO contact (name,address,tel1,tel2,tel3,eamil,website,catergory,wilaya) VALUES  ( "HCA Aïn-Naadja", "Alger", "021.54.05.05", "", "", "", "", 2, "Alger")'); 
		   tx.executeSql('INSERT INTO contact (name,address,tel1,tel2,tel3,eamil,website,catergory,wilaya) VALUES  ( "CHU Mustapha", "Alger", "021.23.55.55", "", "", "", "", 2, "Alger")');  
		   tx.executeSql('INSERT INTO contact (name,address,tel1,tel2,tel3,eamil,website,catergory,wilaya) VALUES ( "CHU Aït Idir", "Rue Haddad Abderazak, Bab Djedid - Casbah - Alger", "021.62.99.48", "", "", "", "", 2, "Alger")'); 
		   tx.executeSql('INSERT INTO contact (name,address,tel1,tel2,tel3,eamil,website,catergory,wilaya) VALUES ( "CHU Aïn Taya", "Alger", "021.86.62.44", "021.86.72.45", "", "", "", 2, "Alger")');  
		   tx.executeSql('INSERT INTO contact (name,address,tel1,tel2,tel3,eamil,website,catergory,wilaya) VALUES  ( "CHU Ben Aknoun", "Alger", "021.91.21.63", "", "", "", "", 2, "Alger")');
		   tx.executeSql('INSERT INTO contact (name,address,tel1,tel2,tel3,eamil,website,catergory,wilaya) VALUES ( "CHU Beni Messous", "Alger", "021.93.11.90", "", "", "", "", 2, "Alger")');  
    }

    // Transaction error callback
    //
    function errorCB(tx, err) {
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    function successCB() {
        alert("success!");
    }
