 // Populate the database 
    //
      function populateDB(tx) {
    	
         tx.executeSql('DROP TABLE IF EXISTS category');
         tx.executeSql('CREATE TABLE IF NOT EXISTS category (id unique, name text)');

         tx.executeSql('INSERT INTO category (id, name) VALUES (1, "SOS")');
         tx.executeSql('INSERT INTO category (id, name) VALUES (2, "HOPITAUX")');
         tx.executeSql('INSERT INTO category (id, name) VALUES (3, "BANQUES")');
         tx.executeSql('INSERT INTO category (id, name) VALUES (4, "ASSURANCES")');
         tx.executeSql('INSERT INTO category (id, name) VALUES (5, "HOTELS")');
         tx.executeSql('INSERT INTO category (id, name) VALUES (6, "RESTAURANTS")');
         tx.executeSql('INSERT INTO category (id, name) VALUES (7, "TRANSPORT AERIEN")');
         tx.executeSql('INSERT INTO category (id, name) VALUES (8, "TRANSPORT MARITIME")');
         tx.executeSql('INSERT INTO category (id, name) VALUES (9, "TRANSPORT FERROVIAIRE")');
         tx.executeSql('INSERT INTO category (id, name) VALUES (10, "TRANSPORT ROUTIERE")');
         tx.executeSql('INSERT INTO category (id, name) VALUES (11, "DEPANNAGE")');

	       tx.executeSql("DROP TABLE IF EXISTS contact");
	       
	       tx.executeSql('CREATE TABLE  IF NOT EXISTS  contact ('
	    			  + 'id integer primary key autoincrement,'
	    			  + 'name text,'
	    			  + 'address text,'
	    			  + 'tel1 text,'
	    			  + 'tel2 text,'
	    			  + 'tel3 text,'
	    			  + 'email text,'
	    			  + 'website text,'
	    			  + 'category integer,'
	    			  + 'wilaya text,'
	    			  + 'xmap text,'
	    			  + 'ymap text'
	    			  + ')');
	       

	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "HCA Aïn-Naadja" , "Alger" , "021540505" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Mustapha" , "Alger" , "021235555" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Aït Idir" , "Rue Haddad Abderazak, Bab Djedid - Casbah - Alger" , "021629948" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Aïn Taya" , "Alger" , "021866244" , "021867245" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Ben Aknoun" , "Alger" , "021912163" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Beni Messous" , "Alger" , "021931190" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Bitraria - El Biar" , "Alger" , "021921146" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Hussein Day" , "Alger" , "021598200" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Kouba" , "Alger" , "021589014" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Beb El Oued" , "Alger" , "021570222" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Bologhine" , "Alger" , "021958602" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Baïnem" , "Alger" , "021816113" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU El Harrach" , "Alger" , "021522400" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Belfort" , "Alger" , "021525325" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Drid Hocine" , "Alger" , "021234159" , "021234165" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital El Kettar" , "Alger" , "021620224" , "021627522" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Clinique des Orangers" , "Alger" , "021603200" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital de traumatologie routière (El Harrach)" , "Alger" , "021751217" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Centre Pierre et Marie Curie" , "Alger" , "021666668" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital d\'Oran" , "Oran" , "041341070" , "" , "" , "" , "" , 2 , "Oran" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Centre Spécialisé de rééducation de Brkhadem" , "Alger" , "021566329" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Centre Spécialisé de rééducation d\'El-Biar" , "Alger" , "021783513" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Centre Psycho-Pédagogique pour enfants indaptés me" , "Alger" , "021542122" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Centre pour Handicapés mentaux" , "Alger" , "021921715" , "" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Centre National de Médecine Sportive" , "Alger" , "021799810" , "021921810 à 12" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Centre de Rééducation et Réadaptation Fonctionnell" , "Alger" , "021569670" , "021568860" , "" , "" , "" , 2 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital Ibn Rochd" , "Annaba" , "038838052" , "" , "" , "" , "" , 2 , "Annaba" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital Ibn Sina" , "Annaba" , "038820244" , "" , "" , "" , "" , 2 , "Annaba" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital Seraïdi" , "Annaba" , "038828697" , "" , "" , "" , "" , 2 , "Annaba" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Ibn Badis" , "Constantine" , "031944966" , "" , "" , "" , "" , 2 , "Constantine" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital Sidi Mabrouk" , "Constantine" , "031683700" , "" , "" , "" , "" , 2 , "Constantine" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU Blida" , "Blida" , "025412690" , "" , "" , "" , "" , 2 , "Blida" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU TIZI-OUZOU" , "Tizi" , "025406967" , "" , "" , "" , "" , 2 , "Tizi-Ouzou" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU BATNA" , "Batna" , "033550230" , "" , "" , "" , "" , 2 , "Batna" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU TLEMCEN" , "Tlemcen" , "043261821" , "" , "" , "" , "" , 2 , "Tlemcen" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU SIDI BEL ABBES" , "Sidi Bel Abbes" , "048240964" , "048243830" , "" , "" , "" , 2 , "Sidi-Bel-Abbes" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CHU SETIF" , "Setif" , "036900428" , "" , "" , "" , "" , 2 , "Setif" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital de BEJAIA" , "Bejaia" , "034920428" , "" , "" , "" , "" , 2 , "Bejaia" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital de BOUMERDES" , "Boumerdes" , "024415830" , "" , "" , "" , "" , 2 , "Boumerdes" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital de BOUIRA" , "Bouira" , "026528044" , "" , "" , "" , "" , 2 , "Bouira" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital de MEDEA" , "Medea" , "025502358" , "" , "" , "" , "" , 2 , "Medea" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital de MASCARA" , "Mascara" , "045321653" , "" , "" , "" , "" , 2 , "Mascara" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital de GHARDAIA" , "Ghardaia" , "029891954" , "" , "" , "" , "" , 2 , "Ghardaia" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital de BISKRA" , "Biskra" , "033715186" , "" , "" , "" , "" , 2 , "Biskra" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital de LAGHOUAT" , "Laghouat" , "029721693" , "" , "" , "" , "" , 2 , "Laghouat" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôpital de TAMANRASSET" , "Tamanrasset" , "029734086" , "" , "" , "" , "" , 2 , "Tamanrasset" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "SOS Sécurité" , "" , "112" , "" , "" , "" , "" , 1 , "" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "SOS Santé" , "" , "115" , "" , "" , "" , "" , 1 , "" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "EPEAL (Réclamations)" , "" , "118" , "" , "" , "" , "" , 1 , "" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Renseignements" , "" , "19" , "" , "" , "" , "" , 1 , "" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Télégramme" , "" , "13" , "" , "" , "" , "" , 1 , "" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Réclamations PTT" , "" , "18" , "" , "" , "" , "" , 1 , "" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Police Secours" , "" , "17" , "" , "" , "" , "" , 1 , "" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Pompiers" , "" , "14" , "" , "" , "" , "" , 1 , "" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "SAMU" , "" , "021671616" , "021670088" , "" , "" , "" , 1 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Protection Civile" , "" , "021610017" , "" , "" , "" , "" , 1 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Sureté de Wilaya" , "" , "021638062" , "" , "" , "" , "" , 1 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Gendarmerie" , "" , "021621199" , "021621299" , "" , "" , "" , 1 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Centre Antipoison" , "" , "021574545" , "" , "" , "" , "" , 1 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Ambulances" , "" , "021606666" , "" , "" , "" , "" , 1 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Assistance Express (Privé)" , "" , "021736969" , "" , "" , "" , "" , 1 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Dépannage GAZ" , "" , "021684400" , "" , "" , "" , "" , 11 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Dépannage ELECRICITE" , "" , "021685500" , "" , "" , "" , "" , 11 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Service des EAUX" , "" , "021583232" , "021583737" , "" , "" , "" , 11 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Banque d\'Algérie" , "38, Avenue Franklin Roosvelt - Alger" , "021230023" , "021230053" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Banque Algérienne de Développement (BAD)" , "Lot Mont Froid Bp36 Zonka Birkhadem - Alger" , "021552296" , "021555834" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Banque de Développement Local (BDL)" , "5, rue Gaci Amar - Staouéli - Alger" , "021392800" , "021392820" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Banque de l\'Agréculture et du Développement Rural " , "Boulevard Amirouche - Alger" , "021634945" , "021634502" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Banque Extérieure d\'Algérie (BEA)" , "42, rue des frères Bouadou Bir Mourad Raïs - Alger" , "021449027 à 34" , "" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Banque National d\'Algérie (BNA)" , "8, Bd. Che Guevara - Alger" , "021713526" , "" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Crédit Populaire d\'Algérie (CPA)" , "8,Bd Colonel Amirouche - Alger" , "021740528" , "021726884" , "021726896" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CNEP Banque" , "Siège provisoire Garidi 1 Lot G6 Kouba - Alger" , "021884550" , "021884551" , "021884554" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Banque El Baraka d\'Algérie" , "Haute site Hydra Ben Aknoun - Alger" , "021693276" , "021693272" , "021593406" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Arab Banking Corporation" , "54, Av, Des trois frères Bouadou, Bir Mourad Raïs - Alger" , "021541600" , "021541534" , "021541537" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Société Générale" , "75, chemin Bachir El Ibrahimi, El-Biar - Alger" , "021929200" , "" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "City Bank" , "07, rue Larbi Allik Hydra - Alger" , "021548600" , "" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "BGM" , "Hôtel El Aurassi Niveau C Bureau 13" , "021429758" , "" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "BNP PARISBAS" , "09, rue Didouche Mourad - Alger" , "021642492" , "" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "NATIXIS BANQUE" , "62, chemin Mohamed Drareni Hydra - Alger" , "021549020" , "" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "ARCOBANK" , "71, rue Med Belkacemi Anasser - Alger" , "021774932" , "" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Housing Bank" , "16, rue Ahmed Ouaked, Dely Ibrahim 16320 - Alger" , "021918787" , "" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CETELEM" , "Bp 178 Alger Gare 16000 - Alger" , "021696414" , "" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "TRUST BANK ALGERIA" , "70, chemin Larbi Allik Hydra - Alger" , "021549755" , "" , "" , "" , "" , 3 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CAAR" , "48, rue Didouche Mourad - Alger" , "021632088" , "021632072" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CAAT" , "52, rue des frères Bouadou Bir Mourad Raïs - Alger" , "021449075 à 84" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "SAA" , "5, Bd Che Guevara - Alger" , "021712323" , "021714760" , "021714762" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CCR" , "Lot n°1 Said Hamdine Bir Mourad Raïs - Alger" , "021606262" , "021607777" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CNMA" , "7, Bd. Victor Hugo - Alger" , "021743531" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CMA" , "7, rue Rabah Noêl - Alger" , "021718751" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "SAE" , "Route Dély Ibrahim Cheraga - Alger" , "021361551" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "ALGERIA-RE" , "Lot n°1 Saïd Hamdine Hydra - Alger" , "021546970" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CAGEX" , "10, RN n°36 BP. 116 Dély Ibrahim - Alger" , "021910048 à 51" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CNA" , "Coopérative Ennadjah II Villa n°30 Dély Ibrahim - Alger" , "021691041" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "TRUST ALGERIA" , "70, chemin Larbi Allik Hydra - Alger" , "021548900 à 03" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CIAR" , "27, rue des Frères Belhafidh Paradou Hydra - Alger" , "021691597" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "L\'Algérienne des Assurances (2a)" , "1, rue de Tripoli Hussein Dey - Alger" , "021476872 à 77" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CASH" , "54, Av. des frères Bouadou Bir Mourad Raïs - Alger" , "021541535" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Salama Assurance" , "Cité des P.T.T. n°77 Hydra - Alger" , "021480310" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "AGCI" , "54, Av. des frères Bouadou Bir Mourad Raïs - Alger" , "021448739" , "021448740" , "021448741" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "GAM Assurance" , "" , "021298967" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "ALLIANCE Assurance" , "Bois des Cars 3 Lot 14 Dély Ibrahim - Alger" , "021370766" , "021370767" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "UAR Union Algérienne des Sociétés d\'Assurance et d" , "Résidence Chabani Val Hydra - Alger" , "021601207" , "021601295" , "021602165" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Cardif El-Djazair" , "Résidence Zemoum , rue 11 décembre El-Biar - Alger" , "017062007" , "017062011" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "FGA Fonds de Garantie Automobile" , "1, Kadour Rahim Hussein Day - Alger" , "021773241" , "021910044" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "ANAGA Association Algérienne des Agents Généraux d" , "54, rue Didouche Mourad - Alger" , "021744147" , "021744985" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CCR Compagnie Centrale de Réassurance " , "Lot 1 Said Hamdine Hydra - Alger" , "021547033" , "021545998" , "021547528" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "MAATEC Mutuelle Assurance Algérienne des Travaille" , "3, rue Ali Boumendjel - Alger" , "021746557" , "" , "" , "" , "" , 4 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel El Djazaïr" , "" , "021230933 à 37" , "" , "" , "" , "" , 5 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel El Aurassi" , "" , "021748252" , "" , "" , "" , "" , 5 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Sofitel" , "" , "021685210 à 17" , "" , "" , "" , "" , 5 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Hilton" , "" , "021219696" , "" , "" , "" , "" , 5 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Sheraton" , "" , "021377777" , "" , "" , "" , "" , 5 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Mercure" , "" , "021245970 à 85" , "" , "" , "" , "" , 5 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel le Mouflon d\'Or" , "" , "021568225/75" , "021562562/63" , "" , "" , "" , 5 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel le Moncada" , "" , "021300385" , "021300386" , "" , "" , "" , 5 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Es-Safir" , "" , "021735040" , "" , "" , "" , "" , 5 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel le Sables d\'Or" , "" , "021396924" , "" , "" , "" , "" , 5 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel El Riadh" , "" , "021391402" , "021391437" , "" , "" , "" , 5 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Marsa" , "" , "021391005" , "" , "" , "" , "" , 5 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Royal" , "" , "041393144 / 0413" , "041393279 / 0413" , "" , "" , "" , 5 , "Oran" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Grand Hôtel" , "" , "041395469" , "041393387" , "" , "" , "" , 5 , "Oran" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Cirta" , "" , "031943034" , "031929364" , "031929365" , "" , "" , 5 , "Constantine" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Panoramic" , "" , "031929302" , "031929303" , "" , "" , "" , 5 , "Constantine" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Seybouse" , "" , "038868000" , "038868900" , "" , "" , "" , 5 , "Annaba" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel El Mountazah" , "" , "038874908" , "038874118" , "" , "" , "" , 5 , "Annaba" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel des Zianides" , "" , "043277102" , "043277121" , "" , "" , "" , 1 , "Tlemcen" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Antar" , "" , "049817161" , "" , "" , "" , "" , 5 , "Bechar" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Mermora" , "" , "037212121" , "" , "" , "" , "" , 5 , "Guelma" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Setifis" , "" , "036850099" , "" , "" , "" , "" , 5 , "Setif" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel El Hidhab" , "" , "036854545" , "" , "" , "" , "" , 5 , "Setif" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel El Salem" , "" , "034215696" , "" , "" , "" , "" , 5 , "Bejaia" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel El Mordjane" , "El Kala" , "038661876" , "038650270" , "" , "" , "" , 5 , "Skikda" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Es-Salem" , "" , "038753990" , "" , "" , "" , "" , 5 , "Skikda" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Chelia" , "" , "033865334" , "" , "" , "" , "" , 5 , "Batna" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Ritane Palace" , "" , "032201539" , "" , "" , "" , "" , 5 , "El-Oued" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel ElMehri" , "" , "029712062" , "" , "" , "" , "" , 5 , "Ouargla" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel El Djanoub" , "" , "029890630" , "" , "" , "" , "" , 5 , "Ghardaia" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Les Zibans" , "" , "033713067" , "" , "" , "" , "" , 5 , "Biskra" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Tahat" , "" , "029332772" , "" , "" , "" , "" , 5 , "Tamanrasset" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Gourara" , "Timimoun" , "049984451" , "" , "" , "" , "" , 5 , "Tamanrasset" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Hôtel Touat" , "" , "049259933" , "" , "" , "" , "" , 5 , "Adrar" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Air Algérie (Réservation)" , "" , "021281112" , "" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Air France" , "" , "021732720" , "021731610" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Royal Air Maroc" , "" , "021744520" , "021744521" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Tunis Air" , "" , "021635407" , "" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Saudi Arab Airlines" , "" , "021682274" , "" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Syrian Arab Airlines" , "" , "021717049" , "021715858" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Egypt Air" , "" , "021633423" , "" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Libyan Airlines" , "" , "021636383" , "" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Aéroport Houari Boumediène (Alger)" , "" , "021541515" , "" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "Aigle Azure" , "" , "021733736" , "" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "ALITALIA" , "" , "021727356" , "021727361" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "TURKISH" , "" , "021739340" , "" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "SAOUDIAN AIRLINES" , "" , "021682274" , "" , "" , "" , "" , 7 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "ENTMV" , "" , "021423311" , "021423312" , "" , "" , "" , 8 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "SNTM/CNAN" , "" , "021422380 à 89" , "" , "" , "" , "" , 8 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "ALGERIE FERRIES" , "" , "021423321" , "" , "" , "" , "" , 8 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "NASHCO" , "" , "021462287" , "021461209" , "" , "" , "" , 8 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "CMA CGM" , "" , "021546505" , "021546574" , "" , "" , "" , 8 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "SNCM FERRYTERRANEE" , "" , "021718115" , "" , "" , "" , "" , 8 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "SNTF" , "" , "021768365" , "" , "" , "" , "" , 9 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "SNTF (Agence d\'Alger)" , "" , "021711510" , "" , "" , "" , "" , 9 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "SNTF (Gare Centrale d\'Alger)" , "" , "021647380" , "" , "" , "" , "" , 9 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "SNTR" , "" , "021546000" , "021540504" , "" , "" , "" , 10 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "TRANSMEX" , "" , "021839056" , "" , "" , "" , "" , 10 , "Alger" ,"" , ""  )'); 
	       tx.executeSql('INSERT INTO contact ( name , address , tel1 , tel2 , tel3 , email , website , category , wilaya , xmap , ymap ) VALUES( "MTA (ex SONATMAG)" , "" , "021749507" , "021749508" , "021749509" , "" , "" , 10 , "Alger" ,"" , ""  )'); 
      
      
      }
      
      
      
//      var _loadTable = function(json){
//    	  
//    	  var _rows = json.data;
//  		  var _row_count = _rows.length;
//  		  var _db_name = json.db_name;
//  		  var _tbl = ;
//  		  var _open = 'INSERT INTO ' + _tbl;
//  	 	  var _insert_sql = [];
//    	  
//    	  
//      
//      }


