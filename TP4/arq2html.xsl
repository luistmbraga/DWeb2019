<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="ARQELEM">
       
            <html>
                <head>
                    <title>Arqueossítio: <xsl:value-of select="CONCEL"/> - <xsl:value-of select="IDENTI"/> - <xsl:value-of select="DESCRI"/></title>
                    <meta charset="UTF8" />
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                    <style>
                        .bottom-three {
                        margin-bottom: 3cm;
                        }
                        .bottom-one{
                        margin-bottom: 1cm;
                        }
                        .center{
                        text-align: center;
                        }
                    </style>
                </head>
                <body>
                    <div class="w3-container">
                        <h1 class="bottom-one center"><b>Arqueossítio</b></h1>
                        <table class="w3-table-all bottom-one">
                            <tr>
                                <th>Identificação: </th><td><xsl:value-of select="IDENTI"/></td>      
                            </tr>
                            <tr>
                                <th>Lugar: </th><td><xsl:apply-templates select="LUGAR"/></td>      
                            </tr>
                            <tr>
                                <th>Freguesia: </th><td><xsl:apply-templates select="FREGUE"/></td>      
                            </tr>
                            <tr>
                                <th>Concelho: </th><td><xsl:value-of select="CONCEL"/></td>      
                            </tr>
                            <tr>
                                <th>Código da divisão administrativa: </th><td><xsl:value-of select="CODADM"/></td>      
                            </tr>
                            <tr>
                                <th>Localização: </th>
                                <td>
                                    <table class="w3-table">
                                        <tr>
                                            <th>Latitude: </th><td><xsl:value-of select="LATITU"/></td>
                                        </tr>
                                        <tr>
                                            <th>Longitude: </th><td><xsl:value-of select="LONGIT"/></td>
                                        </tr>
                                        <tr>
                                            <th>Altitude: </th><td><xsl:value-of select="ALTITU"/></td>
                                        </tr>
                                    </table>
                                </td>      
                            </tr>
                            <tr>
                                <th>Cronologia:  </th><td><xsl:value-of select="CRONO"/></td> 
                            </tr>
                            <tr>
                                <th>Descrição: </th><td><xsl:apply-templates select="DESCRI"/></td> 
                            </tr>
                            <tr>
                                <th>Acesso:  </th><td><xsl:apply-templates select="ACESSO"/></td>      
                            </tr>
                            <tr>
                                <th>Quadro:  </th><td><xsl:apply-templates select="QUADRO"/></td>      
                            </tr>
                            <tr>
                                <th>Descrição Arquitectónica: </th><td><xsl:apply-templates select="DESARQ"/></td>      
                            </tr>
                            <tr>
                                <th>Interpretação: </th><td><xsl:apply-templates select="INTERP"/></td>      
                            </tr>
                            <tr>
                                <th>Depósito do espólio arqueológico: </th><td><xsl:value-of select="DEPOSI"/></td>      
                            </tr>
                            <tr>
                                <th>Trabalhos Arqueológicos: </th><td><xsl:apply-templates select="TRAARQ"/></td>
                            </tr>
                            <tr>
                                <th>Interesse Arqueológico: </th><td><xsl:apply-templates select="INTERE"/></td>
                            </tr>
                            <tr>
                                <th>Imagens: </th>
                                <td>
                                    <ul class="w3-ul">
                                        <xsl:apply-templates select="IMAGEM"/>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th>Bibliografia:  </th>
                                <td>
                                    <ul class="w3-ul">
                                        <xsl:apply-templates select="BIBLIO"/>
                                    </ul>
                                </td>      
                            </tr>
                            <tr>
                                <th>Autor: </th><td><xsl:value-of select="AUTOR"/></td>      
                            </tr>
                            <tr>
                                <th>Data:  </th><td><xsl:value-of select="DATA"/></td>      
                            </tr>
                        </table>              
                        <address class="bottom-three center">
                            
                            <a href="http://localhost:7777/0"><b>Voltar à página inicial</b></a>
                        </address>
                    </div>
                </body>
            </html>
        
    </xsl:template>
    
    <!--
        Template para a bibliografia de um arqueossítio.
    -->
    <xsl:template match="BIBLIO">
        <li><xsl:apply-templates/></li>
    </xsl:template>
    
    <!--
        Template para as imagens de um arqueossítio.
    -->
    <xsl:template match="IMAGEM">
        <li><a href="{@NOME}" target="_blank"><xsl:value-of select="@NOME"/></a></li>
    </xsl:template>
    
    <!--
        Template para a descrição de um arqueossítio.
    -->
    <xsl:template match="DESCRI">
        <xsl:apply-templates/>
    </xsl:template>
    
    <!--
        Template para um lugar de um arqueossítio.
    -->
    <xsl:template match="LUGAR">
        <xsl:apply-templates/>
    </xsl:template>
    
    <!--
        Template para a freguesia de um arqueossítio.
    -->
    <xsl:template match="FREGUE">
        <xsl:apply-templates/>
    </xsl:template>
    
    <!--
        Template para o acesso de um arqueossítio.
    -->
    <xsl:template match="ACESSO">
        <xsl:apply-templates/>
    </xsl:template>
    
    <!--
        Template para o quadro de um arqueossítio.
    -->
    <xsl:template match="QUADRO">
        <xsl:apply-templates/>
    </xsl:template>
    
    <!--
        Template para a descrição arquetectónica de um arqueossítio.
    -->
    <xsl:template match="DESARQ">
        <xsl:apply-templates/>
    </xsl:template>
    
    <!--
        Template para os trabalhos arqueológicos de um arqueossítio.
    -->
    <xsl:template match="TRAARQ">
        <xsl:apply-templates/>
    </xsl:template>
    
    <!--
        Template para o interesse arqueológico de um arqueossítio.
    -->
    <xsl:template match="INTERE">
        <xsl:apply-templates/>
    </xsl:template>
    
    <!--
        Template para a "LIGA" de um arqueossítio.
        Obs: Não sabendo o significado exacto de uma "LIGA" supus, através de análise,
        que fosse aplicado a termos de relevância para o contexto do arqueossítio.
        Assim, resolvi aplicar um simples "underline". 
        Susceptível de alterações.
    -->
    <xsl:template match="LIGA">
        <u><xsl:apply-templates/></u>
    </xsl:template>
    
</xsl:stylesheet>