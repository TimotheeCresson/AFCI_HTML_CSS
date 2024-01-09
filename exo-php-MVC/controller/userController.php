<?php

namespace controller; 

use model\User as User;

class UserController {
    private $user;

    public function __construct(User $user) {
        $this->user = $user;
    }

    public function getUser() {
        return $this->user;
    }
}
