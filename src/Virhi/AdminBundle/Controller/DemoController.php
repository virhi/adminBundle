<?php
/**
 * Created by PhpStorm.
 * User: virhi
 * Date: 08/03/15
 * Time: 12:51
 */

namespace Virhi\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Virhi\AdminBundle\DTO\MenuItem;
use Virhi\AdminBundle\DTO\User;

class DemoController extends Controller
{
    public function indexAction()
    {
        $viewParams = array(
        );
        return $this->render('VirhiAdminBundle:Demo:index.html.twig', $viewParams);
    }

    public function formAction()
    {
        $viewParams = array(
        );
        return $this->render('VirhiAdminBundle:Demo:form.html.twig', $viewParams);
    }

    public function tableAction()
    {
        $viewParams = array(
        );
        return $this->render('VirhiAdminBundle:Demo:table.html.twig', $viewParams);
    }

    public function tableAdvanceAction()
    {
        $viewParams = array(
        );
        return $this->render('VirhiAdminBundle:Demo:tableAdvance.html.twig', $viewParams);
    }

    public function iconsAction()
    {
        $viewParams = array(
        );
        return $this->render('VirhiAdminBundle:Demo:icons.html.twig', $viewParams);
    }



    public function sidebarAction()
    {
        $menu = array(
            new MenuItem("Generale"),
            new MenuItem("Home", $this->get('router')->generate('virhi_admin_admin')),
            new MenuItem("Icons", $this->get('router')->generate('virhi_admin_admin_icons')),
            new MenuItem("Forms"),
            new MenuItem("Form", $this->get('router')->generate('virhi_admin_admin_form')),
            new MenuItem("Tables"),
            new MenuItem("Simples", $this->get('router')->generate('virhi_admin_admin_table')),
            new MenuItem("Advance", $this->get('router')->generate('virhi_admin_admin_table_advance')),
        );

        $viewParams = array(
            'menu_item_list' => $menu,
        );

        return $this->render('VirhiAdminBundle:Theme:sidebar.html.twig', $viewParams);
    }

    public function headerAction()
    {
        $viewParams = array(
            'user' =>  new User('vincent', 'rhino', 'developpeur', true),
        );
        return $this->render('VirhiAdminBundle:Theme:header.html.twig', $viewParams);
    }

    public function footerAction()
    {

        $viewParams = array(
        );
        return $this->render('VirhiAdminBundle:Theme:footer.html.twig', $viewParams);
    }
}