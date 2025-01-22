const messages = {
    en: {
      translations: {
        signup: {
          title: "Registrarse",
          toasts: {
            success: "¡Usuario creado con éxito! Inicie sesión.",
            fail: "Error al crear usuario. Verifique los datos ingresados."
          },
          form: {
            name: "Nombre",
            email: "Correo electrónico",
            password: "Contraseña"
          },
          buttons: {
            submit: "Registrar",
            login: "¿Ya tienes una cuenta? ¡Inicia sesión!"
          }
        },
        login: {
          title: "Iniciar sesión",
          form: {
            email: "Correo electrónico",
            password: "Contraseña"
          },
          buttons: {
            submit: "Entrar",
            register: "¡Regístrate ahora mismo!"
          }
        },
        plans: {
          form: {
            name: "Nombre",
            users: "Usuarios",
            connections: "Conexiones",
            campaigns: "Campañas",
            schedules: "Horarios",
            enabled: "Habilitadas",
            disabled: "Deshabilitadas",
            clear: "Cancelar",
            delete: "Eliminar",
            save: "Guardar",
            yes: "Sí",
            no: "No",
            money: "R$"
          }
        },
        companies: {
          title: "Registrar Empresa",
          form: {
            name: "Nombre de la Empresa",
            plan: "Plan",
            token: "Token",
            submit: "Registrar",
            success: "¡Empresa creada con éxito!"
          }
        },
        auth: {
          toasts: {
            success: "¡Inicio de sesión exitoso!"
          },
          token: "Token"
        },
        dashboard: {
          charts: {
            perDay: {
              title: "Atenciones hoy: "
            }
          }
        },
        connections: {
          title: "Conexiones",
          toasts: {
            deleted: "¡Conexión con WhatsApp eliminada con éxito!"
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "¿Estás seguro? Esta acción no se puede revertir.",
            disconnectTitle: "Desconectar",
            disconnectMessage: "¿Estás seguro? Tendrás que escanear el código QR nuevamente."
          },
          buttons: {
            add: "Agregar WhatsApp",
            disconnect: "Desconectar",
            tryAgain: "Intentar de nuevo",
            qrcode: "CÓDIGO QR",
            newQr: "Nuevo CÓDIGO QR",
            connecting: "Conectando"
          },
          toolTips: {
            disconnected: {
              title: "Fallo al iniciar sesión de WhatsApp",
              content: "Asegúrate de que tu teléfono esté conectado a internet y vuelve a intentarlo, o solicita un nuevo código QR."
            },
            qrcode: {
              title: "Esperando escaneo del código QR",
              content: "Haz clic en el botón 'CÓDIGO QR' y escanea el código QR con tu teléfono para iniciar sesión."
            },
            connected: {
              title: "¡Conexión establecida!"
            },
            timeout: {
              title: "Se perdió la conexión con el teléfono",
              content: "Asegúrate de que tu teléfono esté conectado a internet y que WhatsApp esté abierto, o haz clic en el botón 'Desconectar' para obtener un nuevo código QR."
            }
          },
          table: {
            name: "Nombre",
            number: "Número",
            status: "Estado",
            lastUpdate: "Última actualización",
            default: "Predeterminado",
            actions: "Acciones",
            session: "Sesión"
          }
        },
        whatsappModal: {
          title: {
            add: "Agregar WhatsApp",
            edit: "Editar WhatsApp"
          },
          tabs: {
            general: "General",
            messages: "Mensajes",
            assessments: "Evaluaciones",
            integrations: "Integraciones",
            schedules: "Horario de atención"
          },
          form: {
            name: "Nombre",
            default: "Predeterminado",
            sendIdQueue: "Fila",
            timeSendQueue: "Redirigir a la fila en X minutos",
            queueRedirection: "Redirección de fila",
            outOfHoursMessage: "Mensaje fuera del horario de atención",
            queueRedirectionDesc: "Seleccione una fila para redirigir los contactos que no tienen fila",
            prompt: "Prompt",
            expiresTicket: "Cerrar chats abiertos después de X minutos",
            expiresInactiveMessage: "Mensaje de cierre por inactividad",
            greetingMessage: "Mensaje de saludo",
            complationMessage: "Mensaje de conclusión",
            sendIdQueue: "Fila"
          },
          buttons: {
            okAdd: "Agregar",
            okEdit: "Guardar",
            cancel: "Cancelar"
          },
          success: "WhatsApp guardado con éxito."
        },
        qrCode: {
          message: "Escanea el código QR para iniciar sesión"
        },
        contacts: {
          title: "Contactos",
          toasts: {
            deleted: "¡Contacto eliminado con éxito!",
            deletedAll: "¡Todos los contactos eliminados con éxito!"
          },
          searchPlaceholder: "Buscar...",
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteAllTitle: "Eliminar Todos",
            importTitle: "Importar contactos",
            deleteMessage: "¿Estás seguro de que deseas eliminar este contacto? Todos los tickets relacionados se perderán.",
            deleteAllMessage: "¿Estás seguro de que deseas eliminar todos los contactos? Todos los tickets relacionados se perderán.",
            importMessage: "¿Desea importar todos los contactos del teléfono?"
          },
          confirmationModal: {
              importTitlte: "Importar contactos",
              importMessage: "Esta acción importará los contactos guardados en la agenda de WhatsApp. Algunos modelos pueden no permitir esta funcionalidad o según su configuración de privacidad. Verifique el resultado en hasta 1 hora.",
              deleteTitle: "Eliminar",
              deleteMessage: "¿Estás seguro de que deseas eliminar este contacto? Todos los tickets relacionados se perderán."
          },
          buttons: {
            import: "Importar contactos",
            importSheet: "Importar Excel",
            add: "Agregar contacto",
            export: "Exportar contactos",
            delete: "Eliminar todos los contactos"
          },
          table: {
            name: "Nombre",
            whatsapp: "WhatsApp",
            email: "Correo electrónico",
            actions: "Acciones"
          }
        },
        queueIntegrationModal: {
          title: {
            add: "Agregar proyecto",
            edit: "Editar proyecto"
          },
          form: {
            id: "ID",
            type: "Tipo",
            name: "Nombre",
            projectName: "Nombre del proyecto",
            language: "Idioma",
            jsonContent: "JsonContent",
            urlN8N: "URL",
            typebotSlug: "Typebot - Slug",
            typebotExpires: "Tiempo en minutos para expirar una conversación",
            typebotKeywordFinish: "Palabra para finalizar el ticket",
            typebotKeywordRestart: "Palabra para reiniciar el flujo",
            typebotRestartMessage: "Mensaje al reiniciar la conversación",
            typebotUnknownMessage: "Mensaje de opción inválida",
            typebotDelayMessage: "Intervalo (ms) entre mensajes"
          },
          buttons: {
            okAdd: "Agregar",
            okEdit: "Guardar",
            cancel: "Cancelar",
            test: "Probar Bot"
          },
          messages: {
            testSuccess: "¡Integración probada con éxito!",
            addSuccess: "Integración agregada con éxito.",
            editSuccess: "Integración editada con éxito."
          }
        },
        sideMenu: {
          name: "Menú lateral inicial",
          note: "Si está habilitado, el menú lateral se iniciará cerrado",
          options: {
            enabled: "Abierto",
            disabled: "Cerrado"
          }
        },
        promptModal: {
          form: {
            name: "Nombre",
            prompt: "Prompt",
            voice: "Voz",
            max_tokens: "Máximo de Tokens en la respuesta",
            temperature: "Temperatura",
            apikey: "Clave de API",
            max_messages: "Máximo de mensajes en el historial",
            voiceKey: "Clave de API de voz",
            voiceRegion: "Región de voz"
          },
          success: "¡Prompt guardado con éxito!",
          title: {
            add: "Agregar Prompt",
            edit: "Editar Prompt"
          },
          buttons: {
            okAdd: "Agregar",
            okEdit: "Guardar",
            cancel: "Cancelar"
          }
        },
        prompts: {
          title: "Prompts",
          table: {
            name: "Nombre",
            queue: "Setor/Fila",
            max_tokens: "Máximo Tokens Respuesta",
            actions: "Acciones"
          },
          confirmationModal: {
            deleteTitle: "Excluir",
            deleteMessage: "¿Estás seguro? Esta acción no puede ser revertida!"
          },
          buttons: {
            add: "Agregar Prompt"
          }
        },
        contactModal: {
          title: {
            add: "Agregar contacto",
            edit: "Editar contacto"
          },
          form: {
            mainInfo: "Datos del contacto",
            extraInfo: "Información adicional",
            name: "Nombre",
            number: "Número de WhatsApp",
            email: "Correo electrónico",
    extraName: "Nombre del campo",
    extraValue: "Valor",
    whatsapp: "Conexión Origen: "
  },
        buttons: {
          addExtraInfo: "Añadir información",
          okAdd: "Añadir",
          okEdit: "Guardar",
          cancel: "Cancelar"
        },
        success: "Contacto guardado con éxito.",
      },
        queueModal: {
          title: {
            add: "Añadir cola",
            edit: "Editar cola"
          },
          confirmationModal: {
            deleteTitle: "Eliminar"
          },
          form: {
            name: "Nombre",
            color: "Color",
            greetingMessage: "Mensaje de saludo",
            complationMessage: "Mensaje de finalización",
            outOfHoursMessage: "Mensaje fuera del horario de atención",
            ratingMessage: "Mensaje de evaluación",
            token: "Token",
            orderQueue: "Orden de la cola (Bot)",
            integrationId: "Integración"
          },
          buttons: {
            okAdd: "Añadir",
            okEdit: "Guardar",
            cancel: "Cancelar",
            attach: "Adjuntar archivo"
          }
        },
        userModal: {
          title: {
            add: "Añadir usuario",
            edit: "Editar usuario"
          },
          form: {
            name: "Nombre",
            email: "Email",
            password: "Contraseña",
            profile: "Perfil",
            whatsapp: "Conexión Predeterminada",
            allTicket: "Ticket Sin Cola [Invisible]",
            allTicketEnabled: "Habilitado",
            allTicketDesabled: "Deshabilitado"
          },
          buttons: {
            okAdd: "Añadir",
            okEdit: "Guardar",
            cancel: "Cancelar"
          },
          success: "Usuario guardado con éxito."
        },
        scheduleModal: {
          title: {
            add: "Nueva Programación",
            edit: "Editar Programación"
          },
          form: {
            body: "Mensaje",
            contact: "Contacto",
            sendAt: "Fecha de Programación",
            sentAt: "Fecha de Envío"
          },
          buttons: {
            okAdd: "Añadir",
            okEdit: "Guardar",
            cancel: "Cancelar"
          },
          success: "Programación guardada con éxito."
        },
        tagModal: {
          title: {
            add: "Nueva Etiqueta",
            edit: "Editar Etiqueta"
          },
          form: {
            name: "Nombre",
            color: "Color"
          },
          buttons: {
            okAdd: "Añadir",
            okEdit: "Guardar",
            cancel: "Cancelar"
          },
          success: "Etiqueta guardada con éxito."
        },
        chat: {
          noTicketMessage: "Seleccione un ticket para comenzar a conversar."
        },
        uploads: {
          titles: {
            titleUploadMsgDragDrop: "ARRASTRE Y SUELTE ARCHIVOS EN EL CAMPO DE ABAJO",
            titleFileList: "Lista de archivo(s)"
          }
        },
        ticketsManager: {
          buttons: {
            newTicket: "Nuevo",
            closeallTicket: "Cerrar"
          }
        },
        ticketsQueueSelect: {
          placeholder: "Colas"
        },
        tickets: {
          inbox: {
            closedAllTickets: "¿Cerrar todos los tickets?",
            closedAll: "Cerrar Todos",
            newTicket: "Nuevo Ticket",
            yes: "SÍ",
            no: "NO",
            open: "Abiertos",
            resolverd: "Resueltos"
          },
          toasts: {
            deleted: "El ticket que estabas atendiendo fue eliminado."
          },
          notification: {
            message: "Mensaje de"
          },
          tabs: {
            open: { title: "Abiertas" },
            closed: { title: "Resueltos" },
            search: { title: "Búsqueda" }
          },
          search: {
            placeholder: "Buscar tickets y mensajes",
            filterConnections: "Filtro por conexiones",
            filterContacts: "Filtro por contacto",
            filterConections: "Filtro por Conexión",
            filterConectionsOptions: {
              open: "Abierto",
              closed: "Cerrado",
              pending: "Pendiente"
            },
            filterUsers: "Filtro por Usuarios",
            ticketsPerPage: "Tickets por página"
          },
          buttons: {
            showAll: "Todos"
          }
        },
        transferTicketModal: {
          title: "Transferir Ticket",
          fieldLabel: "Escriba para buscar usuarios",
          fieldQueueLabel: "Transferir a la cola",
          fieldQueuePlaceholder: "Seleccione una cola",
          noOptions: "Ningún usuario encontrado con ese nombre",
          buttons: {
            ok: "Transferir",
            cancel: "Cancelar"
          }
        },
        ticketsList: {
          pendingHeader: "Pendiente",
          assignedHeader: "Atendiendo",
          noTicketsTitle: "¡Nada aquí!",
          noTicketsMessage: "No se encontraron tickets con ese estado o término buscado",
          buttons: {
            accept: "Aceptar",
            closed: "Finalizar",
            transfer: "Transferir",
            reopen: "Reabrir"
          }
        },
        newTicketModal: {
          title: "Crear Ticket",
          fieldLabel: "Escriba para buscar el contacto",
          add: "Añadir",
          buttons: {
            ok: "Guardar",
            cancel: "Cancelar"
          }
        },
        mainDrawer: {
          listItems: {
            dashboard: "Dashboard",
            connections: "Conexiones",
            tickets: "Atendimientos",
            quickMessages: "Respuestas Rápidas",
            contacts: "Contactos",
            queues: "Colas & Chatbot",
            tags: "Etiquetas",
            administration: "Administración",
            users: "Usuarios",
            settings: "Configuraciones",
            helps: "Ayuda",
            messagesAPI: "API",
            schedules: "Programaciones",
            campaigns: "Campañas",
            annoucements: "Anuncios",
            chats: "Chat Interno",
            financeiro: "Financiero",
            files: "Lista de archivos",
            prompts: "Open.Ai",
            reports: "Informes",
            queueIntegration: "Integraciones"
          },
          appBar: {
            notRegister: "Sin notificaciones",
            user: {
              profile: "Perfil",
              logout: "Salir"
            }
          }
        },
        queueIntegration: {
          title: "Integraciones",
          table: {
            id: "ID",
            type: "Tipo",
            name: "Nombre",
            projectName: "Nombre del Proyecto",
            language: "Idioma",
            lastUpdate: "Última actualización",
            actions: "Acciones"
          },
          buttons: {
            add: "Añadir Proyecto"
          },
          searchPlaceholder: "Buscar...",
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "¿Estás seguro? ¡Esta acción no puede ser revertida y será eliminada de las colas y conexiones vinculadas!"
          }
        },
        reports: {
          title: "Informes de Tickets",
          table: {
            id: "Ticket",
            user: "Usuario",
            dateOpen: "Fecha de Apertura",
            dateClose: "Fecha de Cierre",
            NPS: "NPS",
            status: "Estado",
            whatsapp: "Conexión",
            queue: "Cola",
            actions: "Acciones",
            lastMessage: "Último Mensaje",
            contact: "Cliente",
            supportTime: "Tiempo de Atención"
          },
          buttons: {
            filter: "Aplicar Filtro"
          },
          searchPlaceholder: "Buscar..."
        },
        files: {
          title: "Lista de archivos",
          table: {
            name: "Nombre",
            contacts: "Contactos",
            actions: "Acción"
          },
          toasts: {
            deleted: "¡Lista eliminada con éxito!",
            deletedAll: "¡Todas las listas fueron eliminadas con éxito!"
          },
          buttons: {
            add: "Añadir",
            deleteAll: "Eliminar Todos"
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteAllTitle: "Eliminar Todos",
            deleteMessage: "¿Estás seguro de que deseas eliminar esta lista?",
            deleteAllMessage: "¿Estás seguro de que deseas eliminar todas las listas?"
          }
        },
        messagesAPI: {
          title: "API",
          textMessage: {
            number: "Número",
            body: "Mensaje",
            token: "Token registrado"
          },
          mediaMessage: {
            number: "Número",
            body: "Nombre del archivo",
            media: "Archivo",
            token: "Token registrado"
          }
        },
        notifications: {
          noTickets: "No hay notificaciones."
        },
        quickMessages: {
          title: "Respuestas Rápidas",
          searchPlaceholder: "Buscar...",
          noAttachment: "Sin adjunto",
          confirmationModal: {
            deleteTitle: "Eliminación",
            deleteMessage: "¡Esta acción es irreversible! ¿Desea continuar?"
          },
          buttons: {
            add: "Añadir",
            attach: "Adjuntar archivo",
            cancel: "Cancelar",
            edit: "Editar"
          },
          toasts: {
            success: "¡Atajo añadido con éxito!",
            deleted: "¡Atajo eliminado con éxito!"
          },
          dialog: {
            title: "Mensaje Rápido",
            shortcode: "Atajo",
            message: "Respuesta",
            save: "Guardar",
            cancel: "Cancelar",
            geral: "Permitir editar",
      add: "Agregar",
      edit: "Editar",
      visao: "Permitir vista",
    },
    table: {
      shortcode: "Atajo",
      message: "Mensaje",
      actions: "Acciones",
      mediaName: "Nombre del Archivo",
      status: "Estado",
    },
  },
        messageVariablesPicker: {
          label: "Variables disponibles",
          vars: {
            contactFirstName: "Primer Nombre",
            contactName: "Nombre",
            greeting: "Saludo",
            protocolNumber: "Protocolo",
            date: "Fecha",
            hour: "Hora"
          }
        },
        contactLists: {
          title: "Listas de Contactos",
          table: {
            name: "Nombre",
            contacts: "Contactos",
            actions: "Acciones"
          },
          buttons: {
            add: "Nueva Lista"
          },
          dialog: {
            name: "Nombre",
            company: "Empresa",
            okEdit: "Editar",
            okAdd: "Añadir",
            add: "Añadir",
            edit: "Editar",
            cancel: "Cancelar"
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "Esta acción no puede ser revertida."
          },
          toasts: {
            deleted: "Registro eliminado"
          }
        },
        contactListItems: {
          title: "Contactos",
          searchPlaceholder: "Buscar",
          buttons: {
            add: "Nuevo",
            lists: "Listas",
            import: "Importar"
          },
          dialog: {
            name: "Nombre",
            number: "Número",
            whatsapp: "Whatsapp",
            email: "Correo electrónico",
            okEdit: "Editar",
            okAdd: "Añadir",
            add: "Añadir",
            edit: "Editar",
            cancel: "Cancelar"
          },
          table: {
            name: "Nombre",
            number: "Número",
            whatsapp: "Whatsapp",
            email: "Correo electrónico",
            actions: "Acciones"
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "Esta acción no puede ser revertida.",
            importMessage: "¿Desea importar los contactos de esta hoja?",
            importTitlte: "Importar"
          },
          toasts: {
            deleted: "Registro eliminado"
          }
        },
        campaigns: {
          title: "Campañas",
          searchPlaceholder: "Buscar",
          buttons: {
            add: "Nueva Campaña",
            contactLists: "Listas de Contactos"
          },
          table: {
            name: "Nombre",
            whatsapp: "Conexión",
            contactList: "Lista de Contactos",
            status: "Estado",
            scheduledAt: "Programado",
            completedAt: "Completado",
            confirmation: "Confirmación",
            actions: "Acciones"
          },
          dialog: {
            new: "Nueva Campaña",
            update: "Editar Campaña",
            readonly: "Solo Lectura",
            form: {
              name: "Nombre",
              message1: "Mensaje 1",
              message2: "Mensaje 2",
              message3: "Mensaje 3",
              message4: "Mensaje 4",
              message5: "Mensaje 5",
              confirmationMessage1: "Mensaje de Confirmación 1",
              confirmationMessage2: "Mensaje de Confirmación 2",
              confirmationMessage3: "Mensaje de Confirmación 3",
              confirmationMessage4: "Mensaje de Confirmación 4",
              confirmationMessage5: "Mensaje de Confirmación 5",
              messagePlaceholder: "Contenido del mensaje",
              whatsapp: "Conexión",
              status: "Estado",
              scheduledAt: "Programado",
              confirmation: "Confirmación",
              contactList: "Lista de Contactos",
              tagList: "Lista de Etiquetas",
              fileList: "Lista de Archivos"
            },
            buttons: {
              add: "Añadir",
              edit: "Actualizar",
              okadd: "Ok",
              cancel: "Cancelar Envíos",
              restart: "Reiniciar Envíos",
              close: "Cerrar",
              attach: "Adjuntar Archivo"
            }
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "Esta acción no puede ser revertida."
          },
          toasts: {
            success: "Operación realizada con éxito",
            cancel: "Campaña cancelada",
            restart: "Campaña reiniciada",
            deleted: "Registro eliminado"
          }
        },
        announcements: {
          active: "Activo",
          inactive: "Inactivo",
          title: "Anuncios",
          searchPlaceholder: "Buscar",
          buttons: {
            add: "Nuevo Anuncio",
            contactLists: "Listas de Anuncios"
          },
          table: {
            priority: "Prioridad",
            title: "Título",
            text: "Texto",
            mediaName: "Archivo",
            status: "Estado",
            actions: "Acciones"
          },
          dialog: {
            edit: "Edición de Anuncio",
            add: "Nuevo Anuncio",
            update: "Editar Anuncio",
            readonly: "Solo Lectura",
            form: {
              priority: "Prioridad",
              title: "Título",
              text: "Texto",
              mediaPath: "Archivo",
              status: "Estado"
            },
            buttons: {
              add: "Añadir",
              edit: "Actualizar",
              okadd: "Ok",
              cancel: "Cancelar",
              close: "Cerrar",
              attach: "Adjuntar Archivo"
            }
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "Esta acción no puede ser revertida."
          },
          toasts: {
            success: "Operación realizada con éxito",
            deleted: "Registro eliminado"
          }
        },
        campaignsConfig: {
          title: "Configuraciones de Campañas"
        },
        queues: {
          title: "Colas & Chatbot",
          table: {
            id: "ID",
            name: "Nombre",
            color: "Color",
            greeting: "Mensaje de saludo",
            actions: "Acciones",
            orderQueue: "Orden de la cola (bot)"
          },
          buttons: {
            add: "Añadir cola"
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "¿Estás seguro? Esta acción no puede ser revertida. Los tickets de esta cola seguirán existiendo, pero no tendrán ninguna cola asignada."
          }
        },
        queueSelect: {
          inputLabel: "Colas"
        },
        users: {
          title: "Usuarios",
          table: {
            id: "ID",
            name: "Nombre",
            status: "Estado",
            email: "Correo electrónico",
            profile: "Perfil",
            actions: "Acciones"
          },
          status: {
            online: "Usuarios en línea",
            offline: "Usuarios desconectados"
          },
          buttons: {
            add: "Añadir usuario"
          },
          toasts: {
            deleted: "Usuario eliminado con éxito."
          },
          confirmationModal: {
            deleteTitle: "Eliminar",
            deleteMessage: "Todos los datos del usuario se perderán. Los tickets abiertos de este usuario se moverán a la cola."
          }
        },
        helps: {
          title: "Centro de Ayuda"
        },
        schedules: {
          title: "Programaciones",
          confirmationModal: {
            deleteTitle: "¿Estás seguro de que quieres eliminar esta programación?",
            deleteMessage: "Esta acción no puede ser revertida."
          },
          table: {
            contact: "Contacto",
            body: "Mensaje",
            sendAt: "Fecha de Programación",
            sentAt: "Fecha de Envío",
            status: "Estado",
            actions: "Acciones"
          },
          buttons: {
            add: "Nueva Programación"
          },
          toasts: {
            deleted: "Programación eliminada con éxito."
          }
        },
        tags: {
          title: "Etiquetas",
          confirmationModal: {
            deleteTitle: "¿Estás seguro de que quieres eliminar esta etiqueta?",
            deleteMessage: "Esta acción no puede ser revertida.",
            deleteAllMessage: "¿Estás seguro de que quieres eliminar todas las etiquetas?",
            deleteAllTitle: "Eliminar Todos"
          },
          table: {
            name: "Nombre",
            color: "Color",
            tickets: "Tickets Etiquetados",
            actions: "Acciones"
          },
          buttons: {
            add: "Nueva Etiqueta",
            deleteAll: "Eliminar Todas"
          },
          toasts: {
            deletedAll: "Todas las etiquetas eliminadas con éxito!",
            deleted: "Etiqueta eliminada con éxito."
          }
        },
        settings: {
          success: "Configuraciones guardadas con éxito.",
          title: "Configuraciones",
          settings: {
            userCreation: {
              name: "Creación de usuario",
              options: {
                enabled: "Habilitado",
                disabled: "Deshabilitado"
              }
            }
          }
        },
        messagesList: {
          header: {
            assignedTo: "Asignado a:",
            buttons: {
              return: "Regresar",
              resolve: "Resolver",
              reopen: "Reabrir",
              accept: "Aceptar"
            },
          },
        },
              messagesInput: {
                placeholderOpen: "Escribe un mensaje",
                placeholderClosed: "Reabre o acepta este ticket para enviar un mensaje.",
                signMessage: "Firmar"
              },
              contactDrawer: {
                header: "Datos de contacto",
                buttons: {
                  edit: "Editar contacto"
                },
                extraInfo: "Otra información"
              },
              fileModal: {
                title: {
                  add: "Añadir lista de archivos",
                  edit: "Editar lista de archivos"
                },
                buttons: {
                  okAdd: "Guardar",
                  okEdit: "Editar",
                  cancel: "Cancelar",
                  fileOptions: "Añadir archivo"
                },
                form: {
                  name: "Nombre de la lista de archivos",
                  message: "Detalles de la lista",
                  fileOptions: "Lista de archivos",
                  extraName: "Mensaje para enviar con archivo",
                  extraValue: "Valor de la opción"
                },
                success: "Lista de archivos guardada con éxito!"
              },
              ticketOptionsMenu: {
                schedule: "Programación",
                delete: "Eliminar",
                transfer: "Transferir",
                registerAppointment: "Notas de contacto",
                appointmentsModal: {
                  title: "Notas de contacto",
                  textarea: "Nota",
                  placeholder: "Introduce la información que deseas registrar aquí"
                },
                confirmationModal: {
                  title: "Eliminar ticket",
                  titleFrom: "del contacto ",
                  message: "¡Atención! Todos los mensajes relacionados con el ticket se perderán."
                },
                buttons: {
                  delete: "Eliminar",
                  cancel: "Cancelar"
                }
              },
              confirmationModal: {
                buttons: {
                  confirm: "Ok",
                  cancel: "Cancelar"
                }
              },
              messageOptionsMenu: {
                delete: "Eliminar",
                reply: "Responder",
                edit: "Editar Mensaje",
                forward: "Reenviar",
                toForward: "Reenviar",
                react: "Reaccionar",
                confirmationModal: {
                  title: "¿Eliminar mensaje?",
                  message: "Esta acción no puede ser revertida."
                }
              },
              backendErrors: {
                ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
                ERR_NO_DEF_WAPP_FOUND: "No se encontró ningún WhatsApp predeterminado. Verifique la página de conexiones.",
                ERR_WAPP_NOT_INITIALIZED: "Esta sesión de WhatsApp no ha sido inicializada. Verifique la página de conexiones.",
                ERR_WAPP_CHECK_CONTACT: "No se pudo verificar el contacto de WhatsApp. Verifique la página de conexiones",
                ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
                ERR_WAPP_DOWNLOAD_MEDIA: "No se pudo descargar el archivo multimedia de WhatsApp. Verifique la página de conexiones.",
                ERR_INVALID_CREDENTIALS: "Error de autenticación. Por favor, inténtelo de nuevo.",
                ERR_SENDING_WAPP_MSG: "Error al enviar el mensaje de WhatsApp. Verifique la página de conexiones.",
                ERR_DELETE_WAPP_MSG: "No se pudo eliminar el mensaje de WhatsApp.",
                ERR_OTHER_OPEN_TICKET: "Ya existe un ticket abierto para este contacto.",
                ERR_SESSION_EXPIRED: "Sesión expirada. Por favor, inicie sesión.",
                ERR_USER_CREATION_DISABLED: "La creación de usuario ha sido deshabilitada por el administrador.",
                ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
                ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
                ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
                ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
                ERR_NO_TICKET_FOUND: "No se encontró ningún ticket con este ID.",
                ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
                ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
                ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
                ERR_CREATING_TICKET: "Error al crear el ticket en la base de datos.",
                ERR_FETCH_WAPP_MSG: "Error al recuperar el mensaje en WhatsApp, quizás es muy antiguo.",
                ERR_QUEUE_COLOR_ALREADY_EXISTS: "Este color ya está en uso, elige otro.",
                ERR_WAPP_GREETING_REQUIRED: "El mensaje de saludo es obligatorio cuando hay más de una cola."
              },
            },
          },      
};

export { messages };
