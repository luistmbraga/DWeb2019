<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    
    <xsl:template match="/">
        <xsl:result-document href="index.html">
            <html>
                <head>
                    <title>Arqueossitios</title>
                    <meta charset="UTF8" />
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                    <style>
                        .w3-ul{list-style-type:decimal;padding:0;margin-left:3em;margin-top:2em}
                        .center{
                        text-align: center;
                        }
                        .bottom-one{
                        margin-bottom: 1cm;
                        }
                    </style>
                </head>
                <body>
                    <h1 class="center"><b>Arqueossítios do Nordeste Português</b></h1>
                    <div class="w3-container">
                        <h3><b>Índice de Arqueossítios:</b></h3>
                        <ul>
                            <xsl:apply-templates select="//ARQELEM[not(preceding::CONCEL=./CONCEL)]">
                                <xsl:sort select="normalize-space(CONCEL)"/>
                            </xsl:apply-templates>
                        </ul>
                    </div>                                     
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <xsl:variable name="c" select="CONCEL"/>
        <li>
            <xsl:value-of select="CONCEL"/>
            <ol>
                <xsl:apply-templates select="//IDENTI[../CONCEL=$c]">
                    <xsl:sort select="."/>      
                </xsl:apply-templates>
            </ol>
        </li>
    </xsl:template>
    
    <xsl:template match="IDENTI">
        <li>
            <!-- 
                Tentei preparar a página para ter referências em cada página, 
                mas não descobri como obter a referência de regresso uma vez dentro da página do arqueossítio. 
            -->
            <a name="{count(preceding::IDENTI)+1}" />
            <a href="http://localhost:7777/{count(preceding::IDENTI)+1}"><xsl:value-of select="."/></a>
        </li>
    </xsl:template>
    
    
</xsl:stylesheet>