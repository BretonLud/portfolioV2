<?php

class LoginClass {

    public $username = 'portfolio@ludovic-breton.fr';

    public $password = "FrederiqueM/08";

    /**
     * @return string
     */
    public function getUsername(): string
    {
        return $this->username;
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }
}