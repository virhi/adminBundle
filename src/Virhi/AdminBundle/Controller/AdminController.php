<?php
/**
 * Created by PhpStorm.
 * User: virhi
 * Date: 23/12/14
 * Time: 17:13
 */

namespace Virhi\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AdminController extends Controller
{
    public function adminDashbordAction()
    {
        return $this->render('VirhiAdminBundle:Admin:dashbord.html.twig', array());
    }
} 