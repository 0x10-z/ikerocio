from django.utils.translation import gettext_lazy as _

data = {
    'skills': [
        {
            "icon_class": "fas fa-code-branch",
            "title": _("Data Analysis"),
            "description": _("Siempre se puede extraer un poco más de los datos como si fuese jugo de un zumo de naranja. Mi experiencia con ellos hasta el momento ha sido puramente academico pero me gusta trabajar en este campo."),
        },
        {
            "icon_class": "fas fa-shield-alt",
            "title": _("Cybersec"),
            "description": _("Me encanta el mundo de la ciberseguridad y hacking ético. Está muy bien desarrollar producto, conectarse a la nube y todo eso pero no hay que perder de vista la seguridad."),
        },
        {
            "icon_class": "fab fa-docker",
            "title": _("DevOps"),
            "description": _("El mundo DevOps empezó a gustarme un poco más desde que descubrí tecnologías como Docker. A quien no le gusta automatizar tareas y levantar infraestructuras a golpe de comando para poder dedicarte a otras cosas."),
        },
        {
            "icon_class": "fab fa-aws",
            "title": _("Cloud Services"),
            "description": _("La cara menos conocida de algunos proveedores como Amazon o Google. Conocí muchos de sus servicios en el Máster y es increible la cantidad de opciones que ofrece a medida del cliente."),
        },
        {
            "icon_class": "fab fa-python",
            "title": _("Python"),
            "description": _("La simpleza y la potencia también pueden ir de la mano y Python es la prueba de ello. Mi elección cuando necesito desarrollar cosas en un corto espacio de tiempo."),
        },
        {
            "icon_class": "fas fa-server",
            "title": _("IT/OT"),
            "description": _("Me ha tocado trabajar con el mundo más industrial donde las máquinas se comunican entre ellas, además de exportar datos al cloud. Los informáticos tenemos mucho que aportar en este mundo."),
        },
        {
            "icon_class": "fab fa-js-square",
            "title": _("Javascript"),
            "description": _("Hablar del Frontend en el siglo XXI sin nombrar Javascript o una de sus muchas librerías es imposible. Y no parece que vaya a cambiar. Por tanto... indispensable."),
        },
        {
            "icon_class": "fab fa-css3-alt",
            "title": _("CSS"),
            "description": _("Digan lo que digan. Las cosas siempre quedan más bonitas cuando las maquillas. Y el desarrollo web no iba a ser menos."),
            "css": True,
        },
        {
            "icon_class": "fab fa-java",
            "title": _("Java"),
            "description": _("La potencia de la multiplataforma y su mercado. Hoy en día nos rodean infinidad de aplicaciones que derivan de este lenguaje. Además, fue con el que aprendí a programar de verdad."),
        },
        {
            "icon_class": "fab fa-php",
            "title": _("PHP"),
            "description": _("El primer lenguaje de programación web que descubrí. Todo lo básico sobre el desarrollo web lo aprendí gracias a el."),
        },
        {
            "icon_class": "fa fa-database",
            "title": _("SQL/NoSQL/Index"),
            "description": _("Existen bases de datos para todo. Hay que entender las necesidades que surgen en cada momento y saber adaptarlas a la tecnología disponible."),
        },
        {
            "icon_class": "fab fa-android",
            "title": _("Android"),
            "description": _("Es innegable el auge que tienen los SO móviles hoy en día. Si no quieres convertirte en un dinosaurio, debes aprender algo sobre ello."),
        }
    ],
    "jobs": [
        {
            "company": _("Kurago Software"),
            "url": "https://kurago.software",
            "date": _("2021-Actualidad"),
            "description": _("Desarrollador de software"),
        },
        {
            "company": _("SMC International Training"),
            "url": "https://www.smctraining.com/es/webpage/indexpage/1181",
            "date": _("2018-2021"),
            "description": _("Trabajo en SMC desarrollando el MES del SIF-400. En medio de los entornos OT e IT."),
        },
        {
            "company": _("Becario Mondragon Unibertsitatea"),
            "url": "#",
            "date": _("2016-2017"),
            "description": _("Participé en un proyecto de investigación relacionado con el ML en máquinas de mecanizado por laser."),
        },
        {
            "company": _("Freelance"),
            "url": "#",
            "date": _("2015-2018"),
            "description": "En mi tiempo libre siempre me han gustado los retos nuevos de aprender nuevas tecnologías y si puede ser de manera remunerada, mejor aun.",
        },
        {
            "company": _("Njoy Party & Events"),
            "url": "#",
            "date": _("2014-2015"),
            "description": _("Desarrollador de Software, Webmaster y SysAdmin para ésta pequeña empresa de eventos. Software a medida para hacer del ocio algo aun más divertido."),
        },
    ],
    "talks": [
        {
            "date": "08/11/2014",
            "url": "http://2014.es.pycon.org/",
            "name": "PyCon Zaragoza",
        },
        {
            "date": "23/11/2013",
            "url": "http://2013.es.pycon.org/",
            "name": "PyCon Madrid",
        },
        {
            "date": "24/03/2012",
            "url": "http://codemotion.es/",
            "name": "Codemotion Madrid",
        },
    ],
    "diplomas": [
        {
            "url": "http://www.spri.eus/euskadinnova/es/enpresa-digitala/agenda/desarrollo-agil-con-python-django/3889.aspx",
            "description": _("Desarrollo Web ágil con Python y Django (15h)"),
        },
        {
            "url": "http://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-routing-switching.html",
            "description": _("Cisco CCNA2: Routing and Switching essentials"),
        },
        {
            "url": "http://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-routing-switching.html",
            "description": _("Cisco CCNA3: Scaling Networks"),
        },
        {
            "url": "http://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-routing-switching.html",
            "description": _("Cisco CCNA4: Routing and Switching. Connecting Networks"),
        },
        {
            "url": "https://learningnetwork.cisco.com/community/certifications/iot",
            "description": _("Cisco IoE: Introduction to the Internet of Everything"),
        },
    ],
    "degrees": [
        {
            "date": "2019-2020",
            "url": "https://www.mondragon.edu/es/master-universitario-analisis-datos-ciberseguridad-computacion-nube",
            "name": _("Máster Universitario en Ciberseguridad, Análisis de datos y Computación en la nube"),
            "university": "Universidad de Mondragón",
        },
        {
            "date": "2010-2018",
            "url": "https://www.mondragon.edu/es/grado-ingenieria-informatica",
            "name": _("Ingeniería Informática"),
            "university": "Universidad de Mondragón",
        }
    ],
    "about_me": _("Soy una persona bastante competitiva en constante aprendizaje y de un perfil muy tecnico. Además, en mis ratos libres, me gusta disfrutar de la música, los amigos y el deporte. En ocasiones, escribo cosas en el blog."),
    "social_networks": [
        {
            "icon_class": "fa fa-user",
            "url": "https://ikerocio.com",
            "name": "Iker Ocio Zuazo"
        },
        {
            "icon_class": "fas fa-blog",
            "url": "https://blog.ikerocio.com",
            "name": "Blog"
        },
        {
            "icon_class": "fab fa-linkedin",
            "url": "https://www.linkedin.com/hp/?dnr=TGyOzgcX4qa3QuJirGRNGgjo4qaIQIhgxmnw",
            "name": "LinkedIn"
        },
        {
            "icon_class": "fab fa-flickr",
            "url": "https://www.flickr.com/photos/ikerocio/",
            "name": "FlickR"
        },
        {
            "icon_class": "fa fa-envelope",
            "url": "mailto:iker@ikerocio.com",
            "name": "iker@ikerocio.com"
        }
    ],
    "portfolio": [
        {
            "image": "image/portfolio/mubreakout.png",
            "name": "MU Breakout",
            "style": "color:white;text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;",
            "repository_image": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            "language_image": "https://image.flaticon.com/icons/png/512/919/919852.png",
            "url": "https://github.com/iocio005/mubreakout",
        },
        {
            "image": "image/portfolio/aitor_viewbook.png",
            "name": "Aitor Viewbook",
            "style": "color:red;text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;",
            "repository_image": "https://img.icons8.com/color/452/bitbucket.png",
            "language_image": "https://monadical.com/static/5-paquetes-django.png",
            "url": "https://aitorrayo.com",
        },
        {
            "image": "image/portfolio/ezdago.png",
            "name": "Ez dago Gasteiz B",
            "style": "color:green;text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;",
            "repository_image": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            "language_image": "https://monadical.com/static/5-paquetes-django.png",
            "url": "https://ezdagogasteizb.eus",
        },
    ]
}