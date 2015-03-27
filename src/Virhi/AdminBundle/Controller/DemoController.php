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

class DemoController extends Controller
{
    public function indexAction()
    {
        $viewParams = array(
        );
        return $this->render('VirhiAdminBundle:Demo:index.html.twig', $viewParams);
    }

    public function sidebarAction()
    {
        $menu = array(
            new MenuItem("MAIN NAVIGATION"),
            new MenuItem("Documentation", "/url/test"),
            new MenuItem("Important", "/url/test"),
            new MenuItem("Warning", "/url/test"),
        );

        $viewParams = array(
            'menu_item_list' => $menu,
        );

        return $this->render('VirhiAdminBundle:Theme:sidebar.html.twig', $viewParams);
    }
}