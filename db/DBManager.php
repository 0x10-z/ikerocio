<?php

/*
user: qwa081
pass: Campiat2016
*/
// INSERT INTO user(id, email, password, nickname, img_path) VALUES (NULL,'','','','');
// Conectando, seleccionando la base de datos



class DBManager{

    var $DB_HOST = "db647887330.db.1and1.com";
    var $DB_NAME = "db647887330";
    var $DB_USER = "dbo647887330";
    var $DB_PASS = "Iker1234+";

    var $whitelist = array(
        '127.0.0.1',
        '::1',
        'localhost'
    );
    /*
    var $DB_HOST = "localhost";
    var $DB_NAME = "alexis";
    var $DB_USER = "root";
    var $DB_PASS = "";
    */

    var $conn;
    private static $instance;

    protected function __construct(){
        if(in_array($_SERVER['REMOTE_ADDR'], $this->whitelist)){
            $this->DB_HOST = "localhost";
            $this->DB_NAME = "ikerocio";
            $this->DB_USER = "root";
            $this->DB_PASS = "";
        }
        $this->conn = new MySQLi($this->DB_HOST, $this->DB_USER, $this->DB_PASS, $this->DB_NAME);
        if($this->conn->connect_error){
            die("Connection failed: ".$this->conn->connect_error);
        }
    }

    public static function getInstance(){
        if(null===static::$instance){
            static::$instance = new static();
        }
        return static::$instance;
    }

    /* APARTMENTS QUERIES */
    public function addIP($ip, $timestamp){
        $sql = "INSERT INTO ip_table(ip, timestamp)VALUES('".$ip."','".$timestamp."');";
        return $this->updateQuery($sql);
    }

    

    public function updateQuery($sql){
        if($this->conn->query($sql)===TRUE){
            return true;
        }else{
            echo "Error. ".$sql."<br>".$this->conn->error;
        }
        return false;
    }

    public function deleteRow($id, $table){
        $sql = "DELETE FROM ".$table." WHERE id=".$id.";";
        return $this->updateQuery($sql);
    }
    /* END UTILS QUERIES */


}

?>