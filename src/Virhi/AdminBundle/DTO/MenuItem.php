<?php
/**
 * Created by PhpStorm.
 * User: virhi
 * Date: 26/03/15
 * Time: 22:50
 */

namespace Virhi\AdminBundle\DTO;

class MenuItem 
{
    protected $label;
    protected $url;

    function __construct($label, $url = null)
    {
        $this->label  = $label;
        $this->url    = $url;
    }


    /**
     * @return mixed
     */
    public function getLabel()
    {
        return $this->label;
    }

    /**
     * @param mixed $label
     */
    public function setLabel($label)
    {
        $this->label = $label;
    }

    /**
     * @return mixed
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * @param mixed $url
     */
    public function setUrl($url)
    {
        $this->url = $url;
    }

    /**
     * @return bool
     */
    public function isHeader()
    {
        return $this->getUrl() === null ? true : false;
    }

}