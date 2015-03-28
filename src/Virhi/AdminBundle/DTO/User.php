<?php
/**
 * Created by PhpStorm.
 * User: virhi
 * Date: 28/03/15
 * Time: 02:22
 */

namespace Virhi\AdminBundle\DTO;


class User 
{
    protected $firstName;
    protected $lastName;

    /**
     * @var boolean
     */
    protected $logged;
    protected $roles;
    protected $images;

    function __construct($firstName, $lastName, $roles, $images, $logged = false)
    {
        $this->firstName = $firstName;
        $this->lastName  = $lastName;
        $this->logged    = $logged;
        $this->roles     = $roles;
        $this->images    = $images;

    }


    /**
     * @return mixed
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * @param mixed $firstName
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    }

    /**
     * @return mixed
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * @param mixed $lastName
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
    }

    /**
     * @return mixed
     */
    public function getRoles()
    {
        return $this->roles;
    }

    /**
     * @param mixed $roles
     */
    public function setRoles($roles)
    {
        $this->roles = $roles;
    }

    /**
     * @return boolean
     */
    public function isLogged()
    {
        return $this->logged;
    }

    /**
     * @param boolean $logged
     */
    public function setLogged($logged)
    {
        $this->logged = (boolean)$logged;
    }

    /**
     * @return mixed
     */
    public function getImages()
    {
        return $this->images;
    }

    /**
     * @param mixed $images
     */
    public function setImages($images)
    {
        $this->images = $images;
    }

}