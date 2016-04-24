systems({
  r3stack: {
    docker_extra: {
      User: 'root'
    },
    depends: ["rethinkdb"],
    image: {"docker": "azukiapp/node"},
    provision: [
      "npm install"
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    command: ["npm", "run", "quickstart"],
    wait: 200,
    mounts: {
      '/azk/#{manifest.dir}': sync("."),
      '/azk/#{manifest.dir}/node_modules': persistent("./node_modules")
    },
    scalable: {"default": 1},
    http: {
      domains: [
        "#{env.HOST_DOMAIN}",
        "#{env.HOST_IP}",
        "#{system.name}.#{azk.default_domain}"
      ]
    },
    ports: {
      http: "3000/tcp"
    },
    envs: {
      PORT: "3000",
      GRAPHQL_HOST: "#{system.name}.#{azk.default_domain}"
    }
  },

  rethinkdb: {
    image: { docker: 'rethinkdb' },
     docker_extra: {
       HostConfig: {
         'PortBindings': {
           '8080/tcp': [{ 'HostPort': '8080' }],
           '28015/tcp': [{ 'HostPort': '28015' }],
           '29015/tcp': [{ 'HostPort': '29015' }]
         }
       }
     },
    shell: '/bin/bash',
    scalable: false,
    command: "rethinkdb --bind all --direct-io --cache-size 2000 --server-name rethinkdb --directory ./rethinkdb --canonical-address rethinkdb.dev.azk.io",
    wait: 75,
    mounts: {
      '/rethinkdb': persistent('rethinkdb-#{manifest.dir}'),
      '/data': persistent('#{system.name}/data')
    },
    ports: {
      http: '8080',
      data: '28015',
      cluster: '29015'
    },
    http: {
      domains: [ '#{system.name}.#{azk.default_domain}' ]
    },
    export_envs: {
      'DATABASE_HOST': '#{net.host}',
      'DATABASE_PORT': '#{net.port.data}',
      'DATABASE_URL': 'rethinkdb://#{net.host}:#{net.port.data}'
    }
  },

  deploy: {
    image: {'docker': 'azukiapp/deploy-digitalocean'},
    mounts: {
      '/azk/deploy/src' :    path('.'),
      '/azk/deploy/.ssh':    path('#{env.HOME}/.ssh'),
      '/azk/deploy/.config': persistent('deploy-config')
    },
    envs: {
      REMOTE_HOST:        "45.55.27.195"
    },
    scalable: {'default': 0, 'limit': 0}
  }
});
