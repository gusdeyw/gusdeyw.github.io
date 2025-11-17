export async function GET() {
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg
    viewBox="-200 0 1200 850"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
>
    <!-- Scaled group to keep elements proportional -->
    <g transform="scale(1)">
        <!-- Title -->
        <text
            x="600"
            y="40"
            font-size="28"
            font-weight="bold"
            text-anchor="middle"
            fill="#1f2937"
        >
            Application Infrastructure & Tech Stack
        </text>

        <!-- Frontend Layer -->
        <g id="frontend-layer">
            <text
                x="100"
                y="120"
                font-size="16"
                font-weight="bold"
                fill="#1f2937"
            >
                FRONTEND
            </text>

            <!-- Vue3Js -->
            <rect
                x="20"
                y="150"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
                x="50"
                y="165"
                width="35"
                height="15"
            />
            <text
                x="70"
                y="195"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                Vue3Js
            </text>

            <!-- React -->
            <rect
                x="140"
                y="150"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                x="170"
                y="165"
                width="35"
                height="15"
            />
            <text
                x="190"
                y="195"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="#000"
            >
                React
            </text>

            <!-- HTML -->
            <rect
                x="260"
                y="150"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                x="285"
                y="165"
                width="40"
                height="15"
            />
            <text
                x="310"
                y="195"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                HTML
            </text>

            <!-- Tailwind -->
            <rect
                x="380"
                y="150"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                x="405"
                y="165"
                width="40"
                height="15"
            />
            <text
                x="430"
                y="195"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                Tailwind
            </text>
        </g>

        <!-- Backend Layer -->
        <g id="backend-layer">
            <text
                x="100"
                y="320"
                font-size="16"
                font-weight="bold"
                fill="#1f2937"
            >
                BACKEND
            </text>

            <!-- GO -->
            <rect
                x="20"
                y="350"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
                x="45"
                y="363"
                width="40"
                height="15"
            />
            <text
                x="70"
                y="395"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                GO
            </text>

            <!-- PHP -->
            <rect
                x="140"
                y="350"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://www.php.net/images/logos/new-php-logo.svg"
                x="165"
                y="363"
                width="40"
                height="15"
            />
            <text
                x="190"
                y="395"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                PHP
            </text>

            <!-- NodeJs -->
            <rect
                x="260"
                y="350"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
                x="285"
                y="363"
                width="40"
                height="15"
            />
            <text
                x="310"
                y="395"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                NodeJs
            </text>
        </g>

        <!-- Database Layer -->
        <g id="database-layer">
            <text
                x="100"
                y="550"
                font-size="16"
                font-weight="bold"
                fill="#1f2937"
            >
                DATABASE
            </text>

            <!-- MySQL/MariaDB -->
            <rect
                x="20"
                y="580"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_blue-transparent.png"
                x="35"
                y="591"
                width="50"
                height="12"
            />
            <text
                x="70"
                y="625"
                font-size="12"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                MySQL/
            </text>
            <text
                x="70"
                y="640"
                font-size="12"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                MariaDB
            </text>

            <!-- PostgreSQL -->
            <rect
                x="140"
                y="580"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
                x="155"
                y="591"
                width="50"
                height="12"
            />
            <text
                x="190"
                y="625"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                PostgreSQL
            </text>

            <!-- MongoDB -->
            <rect
                x="260"
                y="580"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
                x="280"
                y="591"
                width="45"
                height="12"
            />
            <text
                x="310"
                y="625"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="#000"
            >
                MongoDB
            </text>

            <!-- SQLite -->
            <rect
                x="380"
                y="580"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/2560px-SQLite370.svg.png"
                x="405"
                y="591"
                width="40"
                height="12"
            />
            <text
                x="430"
                y="625"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                SQLite
            </text>
        </g>

        <!-- Deployment & OS Layer -->
        <g id="deployment-layer">
            <!-- Deployment Section -->
            <text
                x="650"
                y="320"
                font-size="16"
                font-weight="bold"
                fill="#1f2937"
            >
                DEPLOYMENT
            </text>

            <!-- Docker -->
            <rect
                x="570"
                y="350"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
                x="595"
                y="363"
                width="40"
                height="15"
            />
            <text
                x="620"
                y="395"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                Docker
            </text>

            <!-- Nginx -->
            <rect
                x="690"
                y="350"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://images.icon-icons.com/2699/PNG/512/nginx_logo_icon_169915.png"
                x="715"
                y="363"
                width="40"
                height="15"
            />
            <text
                x="740"
                y="395"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                Nginx
            </text>

            <!-- OS Section -->
            <text
                x="650"
                y="550"
                font-size="16"
                font-weight="bold"
                fill="#1f2937"
            >
                OPERATING SYSTEM
            </text>

            <!-- CentOS -->
            <rect
                x="570"
                y="580"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://upload.wikimedia.org/wikipedia/commons/b/bf/Centos-logo-light.svg"
                x="595"
                y="591"
                width="40"
                height="12"
            />
            <text
                x="620"
                y="625"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                CentOS
            </text>

            <!-- Ubuntu -->
            <rect
                x="690"
                y="580"
                width="100"
                height="80"
                rx="8"
                fill="#1e40af"
                opacity="0.9"
            />
            <image
                href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/2048px-UbuntuCoF.svg.png"
                x="715"
                y="591"
                width="40"
                height="12"
            />
            <text
                x="740"
                y="625"
                font-size="14"
                font-weight="bold"
                text-anchor="middle"
                fill="white"
            >
                Ubuntu
            </text>
        </g>

        <!-- Connection Lines with Arrows -->
        <defs>
            <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
            >
                <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6"></polygon>
            </marker>
        </defs>

        <!-- Data flow particles -->
        <g id="data-flow-particles">
            <!-- Frontend to Backend -->
            <circle cx="70" cy="230" r="4" fill="#8b5cf6" opacity="0.8"></circle>
            <circle cx="190" cy="230" r="4" fill="#8b5cf6" opacity="0.8"></circle>
            <circle cx="310" cy="230" r="4" fill="#8b5cf6" opacity="0.8"></circle>
            <circle cx="430" cy="230" r="4" fill="#8b5cf6" opacity="0.8"></circle>

            <!-- Backend to Database -->
            <circle cx="70" cy="430" r="4" fill="#ec4899" opacity="0.8"></circle>
            <circle cx="190" cy="430" r="4" fill="#ec4899" opacity="0.8"></circle>
            <circle cx="310" cy="430" r="4" fill="#ec4899" opacity="0.8"></circle>

            <!-- Backend to Deployment -->
            <circle cx="380" cy="390" r="4" fill="#06b6d4" opacity="0.8"></circle>

            <!-- Deployment to OS -->
            <circle cx="620" cy="430" r="4" fill="#f59e0b" opacity="0.8"></circle>
            <circle cx="740" cy="430" r="4" fill="#f59e0b" opacity="0.8"></circle>
        </g>

        <!-- Frontend to Backend connections -->
        <line
            x1="70"
            y1="230"
            x2="70"
            y2="350"
            stroke="#8b5cf6"
            stroke-width="2"
            opacity="0.4"
            marker-end="url(#arrowhead)"
        />
        <line
            x1="190"
            y1="230"
            x2="190"
            y2="350"
            stroke="#8b5cf6"
            stroke-width="2"
            opacity="0.4"
            marker-end="url(#arrowhead)"
        />
        <line
            x1="310"
            y1="230"
            x2="310"
            y2="350"
            stroke="#8b5cf6"
            stroke-width="2"
            opacity="0.4"
            marker-end="url(#arrowhead)"
        />
        <line
            x1="430"
            y1="230"
            x2="310"
            y2="350"
            stroke="#8b5cf6"
            stroke-width="2"
            opacity="0.4"
            marker-end="url(#arrowhead)"
        />

        <!-- Backend to Database connections -->
        <line
            x1="70"
            y1="430"
            x2="70"
            y2="580"
            stroke="#ec4899"
            stroke-width="2"
            opacity="0.4"
            marker-end="url(#arrowhead)"
        />
        <line
            x1="190"
            y1="430"
            x2="190"
            y2="580"
            stroke="#ec4899"
            stroke-width="2"
            opacity="0.4"
            marker-end="url(#arrowhead)"
        />
        <line
            x1="310"
            y1="430"
            x2="310"
            y2="580"
            stroke="#ec4899"
            stroke-width="2"
            opacity="0.4"
            marker-end="url(#arrowhead)"
        />

        <!-- Backend to Deployment connections -->
        <line
            x1="380"
            y1="390"
            x2="570"
            y2="390"
            stroke="#06b6d4"
            stroke-width="2"
            opacity="0.4"
            marker-end="url(#arrowhead)"
        />

        <!-- Deployment to OS connections -->
        <line
            x1="620"
            y1="430"
            x2="620"
            y2="580"
            stroke="#f59e0b"
            stroke-width="2"
            opacity="0.4"
            marker-end="url(#arrowhead)"
        />
        <line
            x1="740"
            y1="430"
            x2="740"
            y2="580"
            stroke="#f59e0b"
            stroke-width="2"
            opacity="0.4"
            marker-end="url(#arrowhead)"
        />
    </g>
</svg>`;

    return new Response(svgContent, {
        headers: {
            'Content-Type': 'image/svg+xml',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}
