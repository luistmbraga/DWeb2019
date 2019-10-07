<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    
    <!-- 
        Template raiz de tranformação de um Project Record
    -->
    <xsl:template match="/">
        <html>
            <head>
                <title><xsl:value-of select="/pr/metadata/title"/></title>
                <meta charset="UTF8" />
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <style>
                    .center{
                    text-align: center;
                    }
                </style>
            </head>
            <body>
                <h1 class="center"><b>Project Record</b></h1>
                <hr/>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
    <!--
        Template do corpo de Project Record. Aqui podemos ver a invocação dos templates
        que compõem um Project Record.
    -->
    <xsl:template match="pr">
        <xsl:apply-templates select="metadata"/>
        <hr/>
        <hr/>
        <div class="w3-container">
            <xsl:apply-templates select="workteam"/>
        </div>
        <hr/>
        <hr/>
        <div class="w3-container">
            <xsl:apply-templates select="abstract"/>
        </div>
        <hr/>
        <hr/>
        <div class="w3-container">
            <xsl:apply-templates select="deliverables"/>
        </div>
    </xsl:template>
    
    <!--
        Template dos metadados de um registo de projecto.
    -->
    <xsl:template match="metadata">
        <table class="w3-table">
            <tr>
                <td><b>Keyname: </b><xsl:value-of select="keyname"/></td>
                <td><b>Supervisor: </b><a target="_blank" href="{supervisor/@homepage}"><xsl:value-of select="supervisor"/></a></td>
            </tr>
            <tr>
                <td><b>Title: </b><xsl:value-of select="title"/></td>
                <td><b>Begin Date: </b><xsl:value-of select="bdate"/></td>
            </tr>
            <tr>
                <td>
                    <xsl:choose>
                        <xsl:when test="subtitle">
                            <b>Subtitle: </b>
                            <xsl:value-of select="subtitle"/>
                        </xsl:when>
                    </xsl:choose>
                </td>
                <td><b>End Date: </b><xsl:value-of select="edate"/></td>
            </tr>
        </table>
    </xsl:template>
    
    <!--
        Template da equipa de trabalho (workteam).
    -->
    <xsl:template match="workteam">
        <h3><b>Workteam:</b></h3>
        <ol>
            <xsl:apply-templates select="worker" />
        </ol>
    </xsl:template>
    
    <!--
        Template de um trabalhador singular de uma equipa de trabalho.
    -->
    <xsl:template match="worker">
        <li>
            <xsl:choose>
                <xsl:when test="git">
                   <xsl:value-of select="identifier"/> - <a href="{git}" target="_blank"><xsl:value-of select="name"/></a> - <a href="mailto:{email}"><xsl:value-of select="email"/></a>
                </xsl:when>
                <xsl:otherwise>
                   <xsl:value-of select="identifier"/> - <a href="#" ><xsl:value-of select="name"/></a> - <a href="mailto:{email}"><xsl:value-of select="email"/></a>
                </xsl:otherwise>
            </xsl:choose>
        </li>
    </xsl:template>
    
    <!--
        Template do resumo do projecto. Um resumo é um bloco de texto constituído por vários parágrafos.
    -->
    <xsl:template match="abstract">
        <h3><b>Abstract:</b></h3>
        <xsl:apply-templates select="p"/>
    </xsl:template>
    
    <!--
        Template para o parágrafo. Em cada parágrafo poderemos ter vários estilos de letra:
        -bold (b);
        -itálico (i);
        -underlined (u);
        -url's (xref)
    -->
    <xsl:template match="p">
        <p><xsl:apply-templates/></p>
    </xsl:template>
   
    <!--
        Template para o estilo itálico.
    -->
    <xsl:template match="i">
        <i><xsl:apply-templates/></i>
    </xsl:template>
    
    <!--
        Template para o estilo bold.
    -->
    <xsl:template match="b">
        <b><xsl:apply-templates/></b>
    </xsl:template> 
    
    <!--
        Template para o estilo sublinhado.
    -->
    <xsl:template match="u">
        <u><xsl:apply-templates/></u>
    </xsl:template>
    
    <!--
        Template para os url.
    -->
    <xsl:template match="xref">
        <a href="{@url}" target="_blank"><xsl:apply-templates/></a>
    </xsl:template>
    
    <!--
        Template para o conjunto de "coisas" a serem entregues relativas ao projecto.
    -->
    <xsl:template match="deliverables">
        <h3><b>Deliverables:</b></h3>
        <ol>
            <xsl:apply-templates select="deliverable"/>
        </ol>
    </xsl:template>
    
    <!--
        Template para o elemento individual que deve ser entregue.
    -->
    <xsl:template match="deliverable">
        <li>
            <a href="{@path}"><xsl:apply-templates/></a>
        </li>
    </xsl:template>
    
</xsl:stylesheet>