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

    public function sidebarAction()
    {
        $menu = array(
            new MenuItem("MAIN NAVIGATION"),
            new MenuItem("Form", "/demo/form"),
            new MenuItem("Important", "#"),
            new MenuItem("Warning", "#"),
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