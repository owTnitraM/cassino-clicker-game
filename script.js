let dinheiroSujo = 0;
let dinheiroSujoTotal = 0;
let m1 = 1;
let m2 = 1;
let dinheiroLimpo = 0;
let dinheiroLimpoTotal = 0;
let numeroDeClicks = 0;
let fragmentosCelestiais = 0;
let fragmentosCelestiaisTotais = 0;
let renda = 0;
let lavagem = 1;
let prestigios = 0;
let segundosDeGameplay = 0;
let segundosDeGameplayDivididos = 0;
let minutosDeGameplay = 0;
let horasDeGameplay = 0;
let diasDeGameplay = 0;
let requisitosDoPrestigio = 100; // fragmentos
let fichasCelestiais = 0;
let fichasCelestiaisTotais = 0;
let numeroDeCompras = 0;
let upgPriceMultiplier = 1.2;
let ganhoPorM1Upg = 1;
let ganhoPorM1UpgTotal = 0;
let m1UpgComprados = 0;
let buyXNum = 1;
let buyXDisplay = 1;
let renda1comprados = 0;
let renda2comprados = 0;
let ganhoRenda1 = 1;
let ganhoRenda1total = 0;
let ganhoRenda2 = 5;
let ganhoRenda2total = 0;
//
let upg1time1price = 160;
let upg1time2price = 500;
let upg1time3price = 1200;
let upg1time4price = 1800;
let upg1time5price = 3600;
let upg1time6price = 6000;
let upg1time7price = 9000;
let upg1time8price = 10200;
let upg1time9price = 20000;
let upg1time10price = 25000;
let upg1time11price = 40000;
let upg1time12price = 65000;
let upg1time13price = 100000;
let upg1time14price = 160000;
let upg1time15price = 220000;
let upg1time16price = 250000;
let upg1time17price = 275000;
let upg1time18price = 320000;
// 
let has1timeUpg1 = false;
let has1timeUpg2 = false;
let has1timeUpg3 = false;
let has1timeUpg4 = false;
let has1timeUpg5 = false;
let has1timeUpg6 = false;
let has1timeUpg7 = false;
let has1timeUpg8 = false;
let has1timeUpg9 = false;
let has1timeUpg10 = false;
let has1timeUpg11 = false;
let has1timeUpg12 = false;
let has1timeUpg13 = false;
let has1timeUpg14 = false;
let has1timeUpg15 = false;
let has1timeUpg16 = false;
let has1timeUpg17 = false;
let has1timeUpg18 = false;
let hasTreeUpg1 = false;
let hasTreeUpg2 = false;
let hasTreeUpg3 = false;
let hasTreeUpg4 = false;
let hasTreeUpg5 = false;
let hasTreeUpg6 = false;
let hasTreeUpg7 = false;
let hasCelestialMachines = false;
let hasCleanerCassino = false;
let hasBetterOdds = false;
let hasFichasToBonus;
let hasAutoClicker = false;
let isAutoClickerOn = false;
let hasGamblingAddiction = false;
let hasRendaToM1upg = false;
let hasM2ToLavagemUpg = false;
let m1UpgMultiplier = 1;
let m2UpgMultiplier = 1;
let hardM1Bonus = 0;
let hardM2Bonus = 0;
let rendaUpgMultiplier = 1;
let lavagemUpgMultiplier = 1;
let prestigeMultiplier = 1;
let m1UpgPrice = 10;
let rendaUpg1Price = 20;
let rendaUpg2Price = 100;
let m2UpgPrice = 15;
let lavagem1UpgPrice = 80;
let lavagem2UpgPrice = 200;
let ganhoM2 = 1;
let ganhoLavagem1 = 2;
let ganhoLavagem2 = 5;
let m2UpgComprados = 0;
let lavagem1Comprados = 0;
let lavagem2Comprados = 0;
let ganhoM2Total = 0;
let ganhoLavagem1Total = 0;
let ganhoLavagem2Total = 0;
let isCreditsShown = false;
let isStatsShown = true;
let m1UpgPriceDisplay = 10;
let m2UpgPriceDisplay = 15;
let rendaUpg1PriceDisplay = 20;
let rendaUpg2PriceDisplay = 100;
let lavagem1UpgPriceDisplay = 80;
let lavagem2UpgPriceDisplay = 200;
let zoomLevel = 0;
let prestigeReqMultiplier = 3;
let prestigeMultiplierMultiplier = 2;
let autoM1;
let autoM2;
let fichasGainMultiplier = 1;
let fichaBonusDisplay = 0;
// coisa aposta
let totalApostado = 0;
let ganhosEmAposta = 0;
let perdasEmApostas = 0;
let currencySwitch = 'grana';
let vitoriasNoCassino = 0;
let derrotasNoCassino = 0;
let valorApostadoConta = 0;
let bigWins = 0;
let isCoinSpining = true; // começa girando
let isGambleGoing = false;
let faceApostada = null; // null ate ser aferida
let coinStoppedFor = 0; //  segundos
/* let gateVar1 = 0;
let gateVar2 = 0;
let gateVar3 = 0;
let gateVar4 = 0;
let gateVar5 = 0;
let gateVar6 = 0;
let gateVar7 = 0;
let gateVar8 = 0;
let gateVar9 = 0;
let gateVar10 = 'a';
let gateVar11 = 'a';
let gateVar12 = 'a';
let gateVar13 = 'a';
let gateVar14 = 'a';
let gateVar15 = 'a';
let gateVar16 = 'a';
let gateVar17 = 'a';
let gateVar18 = 'a';
let gateVar19 = 'a';
let gateVar20 = 'a';
let gateVar21 = false;
let gateVar22 = false;
let gateVar23 = false;
let gateVar24 = false;
let gateVar25 = false;
let gateVar26 = false;
let gateVar27 = false;
let gateVar28 = false;
let gateVar29 = false;
let gateVar30 = false; */
// funçao de teste
function as(a) {
    if (a == 1) { alert(0.0018 + 0.0021) }
    if (a == 2) { alert(hasCelestialMachines) }
    if (a == 3) { alert(hasCleanerCassino) }
    if (a == 4) { alert(hasBetterOdds) }
}

function calcularValores() {
    // verifica se vc tem os upgrades e realiza as contas de acordo
    if (hasFichasToBonus) { 
        fichasGainMultiplier = (1 + (0.05 * fichasCelestiaisTotais)); 
        fichaBonusDisplay = fichasCelestiaisTotais * 5;
    }
    if (!hasRendaToM1upg) {
        m1 = Math.ceil(((1 + hardM1Bonus + (1 * m1UpgComprados)) * m1UpgMultiplier * prestigeMultiplier * fichasGainMultiplier));
    } else {
        m1 = Math.ceil((((1 + hardM1Bonus + (1 * m1UpgComprados)) * m1UpgMultiplier * prestigeMultiplier * fichasGainMultiplier) + (renda * 0.15)));
    }
    m2 = Math.ceil(((1 + hardM2Bonus + (1 * m2UpgComprados)) * m2UpgMultiplier * prestigeMultiplier * fichasGainMultiplier));

    renda = Math.ceil((((1 * renda1comprados) + (5 * renda2comprados)) * rendaUpgMultiplier * prestigeMultiplier * fichasGainMultiplier));

    if (!hasM2ToLavagemUpg) {
        lavagem = Math.ceil(((1 + (2 * lavagem1Comprados) + (5 * lavagem2Comprados)) * lavagemUpgMultiplier * prestigeMultiplier * fichasGainMultiplier));
    } else {
        lavagem = Math.ceil((((1 + (2 * lavagem1Comprados) + (5 * lavagem2Comprados)) * lavagemUpgMultiplier * prestigeMultiplier * fichasGainMultiplier)) + (m2 / 2));
    }

    ganhoPorM1Upg = Math.ceil(1 * m1UpgMultiplier * prestigeMultiplier * fichasGainMultiplier);
    ganhoRenda1 = Math.ceil(1 * rendaUpgMultiplier * prestigeMultiplier * fichasGainMultiplier);
    ganhoRenda2 = Math.ceil(5 * rendaUpgMultiplier * prestigeMultiplier * fichasGainMultiplier);
    ganhoPorM1UpgTotal = Math.ceil((1 * m1UpgMultiplier * prestigeMultiplier * fichasGainMultiplier) * m1UpgComprados);
    ganhoRenda1total = Math.ceil((1 * rendaUpgMultiplier * prestigeMultiplier * fichasGainMultiplier) * renda1comprados);
    ganhoRenda2total = Math.ceil((5 * rendaUpgMultiplier * prestigeMultiplier * fichasGainMultiplier) * renda2comprados);
    ganhoM2 = Math.ceil(1 * m2UpgMultiplier * prestigeMultiplier * fichasGainMultiplier);
    ganhoLavagem1 = Math.ceil(2 * lavagemUpgMultiplier * prestigeMultiplier * fichasGainMultiplier);
    ganhoLavagem2 = Math.ceil(5 * lavagemUpgMultiplier * prestigeMultiplier * fichasGainMultiplier);
    ganhoM2Total = Math.ceil((1 * m2UpgMultiplier * prestigeMultiplier * fichasGainMultiplier) * m2UpgComprados);
    ganhoLavagem1Total = Math.ceil((2 * lavagemUpgMultiplier * prestigeMultiplier * fichasGainMultiplier) * lavagem1Comprados);
    ganhoLavagem2Total = Math.ceil((5 * lavagemUpgMultiplier * prestigeMultiplier * fichasGainMultiplier) * lavagem2Comprados);
    manterPreço();
    atualizarPainel();
}
function atualizarPainel() {
    // atribui os valores das variaveis aos ids html
    document.getElementById('dinheiroSujo').innerHTML = dinheiroSujo.toLocaleString('pt-BR');
    document.getElementById('dinheiroSujoTotal').innerHTML = dinheiroSujoTotal.toLocaleString('pt-BR');
    document.getElementById('dinheiroLimpo').innerHTML = dinheiroLimpo.toLocaleString('pt-BR');
    document.getElementById('dinheiroLimpoTotal').innerHTML = dinheiroLimpoTotal.toLocaleString('pt-BR');
    document.getElementById('numeroDeClicks').innerHTML = numeroDeClicks.toLocaleString('pt-BR');
    document.getElementById('fragmentosCelestiais').innerHTML = fragmentosCelestiais.toLocaleString('pt-BR');
    document.getElementById('fragmentosCelestiaisTotais').innerHTML = fragmentosCelestiaisTotais.toLocaleString('pt-BR');
    document.getElementById('m1').innerHTML = m1.toLocaleString('pt-BR');
    document.getElementById('m2').innerHTML = m2.toLocaleString('pt-BR');
    document.getElementById('renda').innerHTML = renda.toLocaleString('pt-BR');
    document.getElementById('lavagem').innerHTML = lavagem.toLocaleString('pt-BR');
    document.getElementById('prestigios').innerHTML = prestigios.toLocaleString('pt-BR');
    document.getElementById('requisitosDoPrestigio').innerHTML = requisitosDoPrestigio.toLocaleString('pt-BR');
    document.getElementById('fichasCelestiais').innerHTML = fichasCelestiais.toLocaleString('pt-BR');
    document.getElementById('fichasCelestiaisTotais').innerHTML = fichasCelestiaisTotais.toLocaleString('pt-BR');
    document.getElementById('m1UpgPrice').innerHTML = m1UpgPriceDisplay.toLocaleString('pt-BR');
    document.getElementById('m1UpgComprados').innerHTML = m1UpgComprados.toLocaleString('pt-BR');
    document.getElementById('buyXDisplay').innerHTML = buyXDisplay.toLocaleString('pt-BR');
    document.getElementById('ganhoPorM1Upg').innerHTML = ganhoPorM1Upg.toLocaleString('pt-BR');
    document.getElementById('ganhoPorM1UpgTotal').innerHTML = ganhoPorM1UpgTotal.toLocaleString('pt-BR');
    document.getElementById('rendaUpg1Price').innerHTML = rendaUpg1PriceDisplay.toLocaleString('pt-BR');
    document.getElementById('renda1comprados').innerHTML = renda1comprados.toLocaleString('pt-BR');
    document.getElementById('ganhoRenda1total').innerHTML = ganhoRenda1total.toLocaleString('pt-BR');
    document.getElementById('ganhoRenda1').innerHTML = ganhoRenda1.toLocaleString('pt-BR');
    document.getElementById('ganhoRenda2').innerHTML = ganhoRenda2.toLocaleString('pt-BR');
    document.getElementById('rendaUpg2Price').innerHTML = rendaUpg2PriceDisplay.toLocaleString('pt-BR');
    document.getElementById('renda2comprados').innerHTML = renda2comprados.toLocaleString('pt-BR');
    document.getElementById('ganhoRenda2total').innerHTML = ganhoRenda2total.toLocaleString('pt-BR');
    document.getElementById('hardM1Bonus').innerHTML = (hardM1Bonus * m1UpgMultiplier * prestigeMultiplier * fichasGainMultiplier).toLocaleString('pt-BR');
    document.getElementById('rendaUpgMultiplier').innerHTML = rendaUpgMultiplier.toLocaleString('pt-BR');
    document.getElementById('m1UpgMultiplier').innerHTML = m1UpgMultiplier.toLocaleString('pt-BR');
    document.getElementById('prestigeMultiplier').innerHTML = prestigeMultiplier.toLocaleString('pt-BR');
    document.getElementById('hardM2Bonus').innerHTML = (hardM2Bonus * m2UpgMultiplier * prestigeMultiplier * fichasGainMultiplier).toLocaleString('pt-BR');
    document.getElementById('m2UpgMultiplier').innerHTML = m2UpgMultiplier.toLocaleString('pt-BR');
    document.getElementById('lavagemUpgMultiplier').innerHTML = lavagemUpgMultiplier.toLocaleString('pt-BR');
    document.getElementById('m2UpgPrice').innerHTML = m2UpgPriceDisplay.toLocaleString('pt-BR');
    document.getElementById('ganhoM2').innerHTML = ganhoM2.toLocaleString('pt-BR');
    document.getElementById('m2UpgComprados').innerHTML = m2UpgComprados.toLocaleString('pt-BR');
    document.getElementById('ganhoM2Total').innerHTML = ganhoM2Total.toLocaleString('pt-BR');
    document.getElementById('ganhoLavagem1').innerHTML = ganhoLavagem1.toLocaleString('pt-BR');
    document.getElementById('ganhoLavagem2').innerHTML = ganhoLavagem2.toLocaleString('pt-BR');
    document.getElementById('lavagem1UpgPrice').innerHTML = lavagem1UpgPriceDisplay.toLocaleString('pt-BR');
    document.getElementById('lavagem2UpgPrice').innerHTML = lavagem2UpgPriceDisplay.toLocaleString('pt-BR');
    document.getElementById('lavagem1Comprados').innerHTML = lavagem1Comprados.toLocaleString('pt-BR');
    document.getElementById('lavagem2Comprados').innerHTML = lavagem2Comprados.toLocaleString('pt-BR');
    document.getElementById('ganhoLavagem1Total').innerHTML = ganhoLavagem1Total.toLocaleString('pt-BR');
    document.getElementById('ganhoLavagem2Total').innerHTML = ganhoLavagem2Total.toLocaleString('pt-BR');
    document.getElementById('upg1time1price').innerHTML = upg1time1price.toLocaleString('pt-BR');
    document.getElementById('upg1time2price').innerHTML = upg1time2price.toLocaleString('pt-BR');
    document.getElementById('upg1time3price').innerHTML = upg1time3price.toLocaleString('pt-BR');
    document.getElementById('upg1time4price').innerHTML = upg1time4price.toLocaleString('pt-BR');
    document.getElementById('upg1time5price').innerHTML = upg1time5price.toLocaleString('pt-BR');
    document.getElementById('upg1time6price').innerHTML = upg1time6price.toLocaleString('pt-BR');
    document.getElementById('upg1time7price').innerHTML = upg1time7price.toLocaleString('pt-BR');
    document.getElementById('upg1time8price').innerHTML = upg1time8price.toLocaleString('pt-BR');
    document.getElementById('upg1time9price').innerHTML = upg1time9price.toLocaleString('pt-BR');
    document.getElementById('upg1time10price').innerHTML = upg1time10price.toLocaleString('pt-BR');
    document.getElementById('upg1time11price').innerHTML = upg1time11price.toLocaleString('pt-BR');
    document.getElementById('upg1time12price').innerHTML = upg1time12price.toLocaleString('pt-BR');
    document.getElementById('upg1time13price').innerHTML = upg1time13price.toLocaleString('pt-BR');
    document.getElementById('upg1time14price').innerHTML = upg1time14price.toLocaleString('pt-BR');
    document.getElementById('hardM1From1Time1').innerHTML = (5 * m1UpgMultiplier * prestigeMultiplier * fichasGainMultiplier).toLocaleString('pt-BR');
    document.getElementById('hardM1From1Time2').innerHTML = (15 * m1UpgMultiplier * prestigeMultiplier * fichasGainMultiplier).toLocaleString('pt-BR');
    document.getElementById('hardM2From1Time1').innerHTML = (10 * m2UpgMultiplier * prestigeMultiplier * fichasGainMultiplier).toLocaleString('pt-BR');
    document.getElementById('hardM2From1Time2').innerHTML = (10 * m2UpgMultiplier * prestigeMultiplier * fichasGainMultiplier).toLocaleString('pt-BR');
    document.getElementById('upg1time15price').innerHTML = upg1time15price.toLocaleString('pt-BR');
    document.getElementById('upg1time16price').innerHTML = upg1time16price.toLocaleString('pt-BR');
    document.getElementById('upg1time17price').innerHTML = upg1time17price.toLocaleString('pt-BR');
    document.getElementById('upg1time18price').innerHTML = upg1time18price.toLocaleString('pt-BR');
    document.getElementById('derrotasNoCassino').innerHTML = derrotasNoCassino.toLocaleString('pt-BR');
    document.getElementById('vitoriasNoCassino').innerHTML = vitoriasNoCassino.toLocaleString('pt-BR');
    document.getElementById('perdasEmApostas').innerHTML = perdasEmApostas.toLocaleString('pt-BR');
    document.getElementById('ganhosEmAposta').innerHTML = ganhosEmAposta.toLocaleString('pt-BR');
    document.getElementById('totalApostado').innerHTML = totalApostado.toLocaleString('pt-BR');
    document.getElementById('bigWins').innerHTML = bigWins.toLocaleString('pt-BR');
    document.getElementById('fichaBonusDisplay').innerHTML = fichaBonusDisplay.toLocaleString('pt-BR');
    /* document.getElementById('').innerHTML = .toLocaleString('pt-BR');*/
}

// muda a chave de compra de acordo com o parametro passado pelo botao
function mudarKey(a, b) {
    if (b == 0) {
        buyXDisplay = a;
        buyXNum = a;
        m1UpgPriceDisplay = calcularPrecoTotal(m1UpgPrice, buyXNum);
        m2UpgPriceDisplay = calcularPrecoTotal(m2UpgPrice, buyXNum);
        rendaUpg1PriceDisplay = calcularPrecoTotal(rendaUpg1Price, buyXNum);
        rendaUpg2PriceDisplay = calcularPrecoTotal(rendaUpg2Price, buyXNum);
        lavagem1UpgPriceDisplay = calcularPrecoTotal(lavagem1UpgPrice, buyXNum);
        lavagem2UpgPriceDisplay = calcularPrecoTotal(lavagem2UpgPrice, buyXNum);
    } else {
        buyXDisplay = 'MAX';
        buyXNum = a;
        m1UpgPriceDisplay = m1UpgPrice;
        m2UpgPriceDisplay = m2UpgPrice;
        rendaUpg1PriceDisplay = rendaUpg1Price;
        rendaUpg2PriceDisplay = rendaUpg2Price;
        lavagem1UpgPriceDisplay = lavagem1UpgPrice;
        lavagem2UpgPriceDisplay = lavagem2UpgPrice;
    }
    calcularValores();
}

function calcularPrecoTotal(precoInicial, quantidade) {
    let precoTotal = 0;
    let precoAtual = precoInicial;
    // retorna o valor que seria utilizado ao comprar um upg pela chave de compra xVezes
    for (let i = 0; i < quantidade; i++) {
        precoTotal += precoAtual;
        precoAtual = Math.floor(precoAtual * upgPriceMultiplier);
    }

    return precoTotal;
}

// refaz as contas para manter o valor com a chave de compra
// pois o valor real é assimilado apos a compra
function manterPreço() {
    if (buyXNum > 100) {
        m1UpgPriceDisplay = m1UpgPrice;
        m2UpgPriceDisplay = m2UpgPrice;
        rendaUpg1PriceDisplay = rendaUpg1Price;
        rendaUpg2PriceDisplay = rendaUpg2Price;
        lavagem1UpgPriceDisplay = lavagem1UpgPrice;
        lavagem2UpgPriceDisplay = lavagem2UpgPrice;
    } else {
        m1UpgPriceDisplay = calcularPrecoTotal(m1UpgPrice, buyXNum);
        m2UpgPriceDisplay = calcularPrecoTotal(m2UpgPrice, buyXNum);
        rendaUpg1PriceDisplay = calcularPrecoTotal(rendaUpg1Price, buyXNum);
        rendaUpg2PriceDisplay = calcularPrecoTotal(rendaUpg2Price, buyXNum);
        lavagem1UpgPriceDisplay = calcularPrecoTotal(lavagem1UpgPrice, buyXNum);
        lavagem2UpgPriceDisplay = calcularPrecoTotal(lavagem2UpgPrice, buyXNum);
    }
}

// clique basico q da grana suja
function doM1() {
    dinheiroSujo += m1;
    dinheiroSujoTotal += m1;
    numeroDeClicks++;
    fragmentosCelestiais += (m1 / 10000);
    fragmentosCelestiaisTotais += (m1 / 10000);
    calcularValores();
}

// clique que lava dinheiro
function doM2() {
    if (m2 <= dinheiroSujo) {
        dinheiroSujo -= m2;
        dinheiroLimpo += m2;
        dinheiroLimpoTotal += m2;
        numeroDeClicks++;
    } else {
        if (dinheiroSujo == 0) { } else {
            if (m2 > dinheiroSujo) {
                dinheiroLimpo += dinheiroSujo;
                dinheiroLimpoTotal += dinheiroSujo;
                dinheiroSujo = 0;
                numeroDeClicks++;
            }
        }
    }
    calcularValores();
}

// pilha de event listeners que realizam as acoes das keybinds
document.addEventListener('keyup', function (event) {
    if (event.key === ' ') {
        doM1();
    }
});
document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        doM2();
    }
});

document.addEventListener('keyup', function (event) {
    switch (event.key) {
        case 'a':
            doBarraPainel(11);
            break;
        case 's':
            doBarraPainel(21);
            break;
        case 'd':
            doBarraPainel(31);
            break;
        case 'z':
            doBarraPainel(12);
            break;
        case 'x':
            doBarraPainel(22);
            break;
        case 'c':
            doBarraPainel(32);
            break;
        case '+':
            doZoom('plus');
            break;
        case '-':
            doZoom('minus');
            break;
        case '1':
            mudarKey(1, 0);
            break;
        case '2':
            mudarKey(5, 0);
            break;
        case '3':
            mudarKey(10, 0);
            break;
        case '4':
            mudarKey(25, 0);
            break;
        case '5':
            mudarKey(50, 0);
            break;
        case '6':
            mudarKey(100, 0);
            break;
        case `'`:
        case `"`:
        case '7':
        case '0':
            mudarKey(9999, 1);
            break;
        case 'b':
            buyAll1TimeUpgs();
            break;
        case 'v':
            doAutoClicker();
        default:
            break;
    }
});
// dev event listener
document.addEventListener('keyup', function (event) {
    switch (event.key) {
        case 'f':
            devFt(1);
            break;
        case 'g':
            devFt(2);
            break;
        case 'h':
            devFt(3);
            break;
        case 'r':
            devFt(5);
            break;
        case 't':
            devFt(4);
            break;
        case 'y':
            devFt(6);
            break;
    }
});

// execulta todas as funçoes de upgs normais caso vc n tiver eles
function buyAll1TimeUpgs() {
    if (!has1timeUpg1) {
        buy1timeUpg('hardM1', 5, upg1time1price, 1);
    }
    if (!has1timeUpg2) {
        buy1timeUpg('lavagemUpgMultiplier', 2, upg1time2price, 2);
    }
    if (!has1timeUpg3) {
        buy1timeUpg('m1UpgMultiplier', 1.00, upg1time3price, 3);
    }
    if (!has1timeUpg4) {
        buy1timeUpg('rendaUpgMultiplier', 2, upg1time4price, 4);
    }
    if (!has1timeUpg5) {
        buy1timeUpg('m2UpgMultiplier', 1.00, upg1time5price, 5);
    }
    if (!has1timeUpg6) {
        buy1timeUpg('rendaUpgMultiplier', 2, upg1time6price, 6);
    }
    if (!has1timeUpg7) {
        buy1timeUpg('hardM2', 10, upg1time7price, 7);
    }
    if (!has1timeUpg8) {
        buy1timeUpg('hardM1', 15, upg1time8price, 8);
    }
    if (!has1timeUpg9) {
        buy1timeUpg('hasM2ToLavagemUpg', null, upg1time9price, 9);
    }
    if (!has1timeUpg10) {
        buy1timeUpg('lavagemUpgMultiplier', 2, upg1time10price, 10);
    }
    if (!has1timeUpg11) {
        buy1timeUpg('m1UpgMultiplier', 2.00, upg1time11price, 11);
    }
    if (!has1timeUpg12) {
        buy1timeUpg('m2UpgMultiplier', 3.00, upg1time12price, 12);
    }
    if (!has1timeUpg13) {
        buy1timeUpg('rendaUpgMultiplier', 3, upg1time13price, 13);
    }
    if (!has1timeUpg14) {
        buy1timeUpg('hardM2', 10, upg1time14price, 14);
    }
    if (!has1timeUpg15) {
        buy1timeUpg('rendaToM1', null, upg1time15price, 15);
    }
    if (!has1timeUpg16) {
        buy1timeUpg('lavagemUpgMultiplier', 3, upg1time16price, 16);
    }
    if (!has1timeUpg17) {
        buy1timeUpg('m1UpgMultiplier', 1.00, upg1time17price, 17);
    }
    if (!has1timeUpg18) {
        buy1timeUpg('m2UpgMultiplier', 3.00, upg1time18price, 18);
    }
    calcularValores();
}

// melhora o m1 // aumenta o numero de vezes que foi comprado, deduz o valor e o aumenta
function buyM1() {
    numeroDeCompras = 0;
    while (dinheiroLimpo >= m1UpgPrice && numeroDeCompras < buyXNum) {
        dinheiroLimpo -= m1UpgPrice;
        m1UpgPrice = Math.floor((upgPriceMultiplier * m1UpgPrice));
        m1UpgComprados++;
        numeroDeCompras++;
    }
    calcularValores();
}

// msm coisa
function buyRendaPorSegundoUpg1() {
    numeroDeCompras = 0;
    while (dinheiroLimpo >= rendaUpg1Price && numeroDeCompras < buyXNum) {
        dinheiroLimpo -= rendaUpg1Price;
        rendaUpg1Price = Math.floor((upgPriceMultiplier * rendaUpg1Price));
        renda1comprados++;
        numeroDeCompras++;
    }
    calcularValores();
}

function buyRendaPorSegundoUpg2() {
    numeroDeCompras = 0;
    while (dinheiroLimpo >= rendaUpg2Price && numeroDeCompras < buyXNum) {
        dinheiroLimpo -= rendaUpg2Price;
        rendaUpg2Price = Math.floor((upgPriceMultiplier * rendaUpg2Price));
        renda2comprados++;
        numeroDeCompras++;
    }
    calcularValores();
}

function buyM2() {
    numeroDeCompras = 0;
    while (dinheiroLimpo >= m2UpgPrice && numeroDeCompras < buyXNum) {
        dinheiroLimpo -= m2UpgPrice;
        m2UpgPrice = Math.floor((upgPriceMultiplier * m2UpgPrice));
        m2UpgComprados++;
        numeroDeCompras++;
    }
    calcularValores();
}

function buyLavagemPorSegundoUpg1() {
    numeroDeCompras = 0;
    while (dinheiroLimpo >= lavagem1UpgPrice && numeroDeCompras < buyXNum) {
        dinheiroLimpo -= lavagem1UpgPrice;
        lavagem1UpgPrice = Math.floor((upgPriceMultiplier * lavagem1UpgPrice));
        lavagem1Comprados++;
        numeroDeCompras++;
    }
    calcularValores();
}

function buyLavagemPorSegundoUpg2() {
    numeroDeCompras = 0;
    while (dinheiroLimpo >= lavagem2UpgPrice && numeroDeCompras < buyXNum) {
        dinheiroLimpo -= lavagem2UpgPrice;
        lavagem2UpgPrice = Math.floor((upgPriceMultiplier * lavagem2UpgPrice));
        lavagem2Comprados++;
        numeroDeCompras++;
    }
    calcularValores();
}

// atribui os bonus e deixa os botoes invisiveis
function buy1timeUpg(typeUpg, bonusAmt, preco1timeUpg, numeroDoUpgradePerm) {
    if (dinheiroLimpo >= preco1timeUpg) {
        dinheiroLimpo -= preco1timeUpg;

        switch (typeUpg) {

            case 'hardM1':
                hardM1Bonus += bonusAmt;
                break;
            case 'hardM2':
                hardM2Bonus += bonusAmt;
                break;
            case 'm1UpgMultiplier':
                m1UpgMultiplier += bonusAmt;
                break;
            case 'm2UpgMultiplier':
                m2UpgMultiplier += bonusAmt;
                break;
            case 'rendaUpgMultiplier':
                rendaUpgMultiplier *= bonusAmt;
                break;
            case 'lavagemUpgMultiplier':
                lavagemUpgMultiplier *= bonusAmt;
                break;
            case 'rendaToM1':
                hasRendaToM1upg = true;
                break;
            case 'hasM2ToLavagemUpg':
                hasM2ToLavagemUpg = true;
                break;
            default:
                alert('Error: 142')
                return;

        }

        excluirUpgBtn(numeroDoUpgradePerm);
    } else { }
    calcularValores();
}

function excluirUpgBtn(a) {
    const btn = document.getElementById(`buy1timeUpg${a}`);
    if (btn) { btn.style.display = 'none'; }

    if (a === 1) has1timeUpg1 = true;
    if (a === 2) has1timeUpg2 = true;
    if (a === 3) has1timeUpg3 = true;
    if (a === 4) has1timeUpg4 = true;
    if (a === 5) has1timeUpg5 = true;
    if (a === 6) has1timeUpg6 = true;
    if (a === 7) has1timeUpg7 = true;
    if (a === 8) has1timeUpg8 = true;
    if (a === 9) has1timeUpg9 = true;
    if (a === 10) has1timeUpg10 = true;
    if (a === 11) has1timeUpg11 = true;
    if (a === 12) has1timeUpg12 = true;
    if (a === 13) has1timeUpg13 = true;
    if (a === 14) has1timeUpg14 = true;
    if (a === 15) has1timeUpg15 = true;
    if (a === 16) has1timeUpg16 = true;
    if (a === 17) has1timeUpg17 = true;
    if (a === 18) has1timeUpg18 = true;
}

// awwwn dang it // hasGamblingAddiction // hasCelestialMachines // hasCleanerCassino // hasBetterOdds
function GAMBLE(allIn) {
    var apostaCassino = document.getElementById('apostaCassino').value;
    apostaCassino = parseFloat(apostaCassino);
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    if (faceApostada == null) { alert('aposta não aferida') } else {
        if (apostaCassino <= 0) { alert('valor invalido') } else {
            if (numeroAleatorio === 100 && currencySwitch == 'grana') {
                if (dinheiroLimpo >= apostaCassino) {
                    bigWin(currencySwitch, apostaCassino, allIn);
                }
                else {
                    if (currencySwitch == 'frag' && fragmentosCelestiais >= apostaCassino) {
                        bigWin(currencySwitch, apostaCassino, allIn);
                    }

                }

            } else {
                if (currencySwitch == 'grana' && dinheiroLimpo >= apostaCassino) {
                    if (hasBetterOdds && numeroAleatorio <= 55) { cassinoWin(currencySwitch, apostaCassino, allIn) }
                    if (!hasBetterOdds && numeroAleatorio <= 45) { cassinoWin(currencySwitch, apostaCassino, allIn) }
                    if (hasBetterOdds && numeroAleatorio >= 56) { cassinoLoss(currencySwitch, apostaCassino, allIn) }
                    if (!hasBetterOdds && numeroAleatorio >= 46) { cassinoLoss(currencySwitch, apostaCassino, allIn) }
                } else {
                    if (currencySwitch == 'frag' && fragmentosCelestiais >= apostaCassino) {
                        if (hasBetterOdds && numeroAleatorio <= 30) { cassinoWin(currencySwitch, apostaCassino, allIn) }
                        if (!hasBetterOdds && numeroAleatorio <= 25) { cassinoWin(currencySwitch, apostaCassino, allIn) }
                        if (hasBetterOdds && numeroAleatorio >= 31) { cassinoLoss(currencySwitch, apostaCassino, allIn) }
                        if (!hasBetterOdds && numeroAleatorio >= 26) { cassinoLoss(currencySwitch, apostaCassino, allIn) }
                    }
                }
            }
        }
    }
}

function bigWin(tipoDaMoeda, valorApostado, allIn) {
    valorApostadoConta = valorApostado;
    if (allIn === 1 && tipoDaMoeda == "grana") { valorApostadoConta = dinheiroLimpo }
    if (allIn === 1 && tipoDaMoeda == "frag") { valorApostadoConta = fragmentosCelestiais }
    if (tipoDaMoeda == "grana") {
        if (hasCleanerCassino) {
            fragmentosCelestiais += ((valorApostadoConta / 10000) * 10);
            dinheiroLimpo += ((valorApostadoConta * 10) * 0.90);
            dinheiroLimpoTotal += ((valorApostadoConta * 10) * 0.90);
            ganhosEmAposta += ((valorApostadoConta * 10) * 0.90);
            vitoriasNoCassino++;
            bigWins++;
            totalApostado += valorApostadoConta;
        } else {
            if (hasCelestialMachines) {
                fragmentosCelestiais += ((valorApostadoConta / 10000) * 10);
                dinheiroLimpo -= valorApostadoConta;
                dinheiroSujo += (valorApostadoConta * 10);
                dinheiroSujoTotal += (valorApostadoConta * 10);
                ganhosEmAposta += ((valorApostadoConta * 10) * 0.90);
                vitoriasNoCassino++;
                bigWins++;
                totalApostado += valorApostadoConta;
            } else {
                dinheiroLimpo -= valorApostadoConta;
                dinheiroSujo += (valorApostadoConta * 10);
                dinheiroSujoTotal += (valorApostadoConta * 10);
                ganhosEmAposta += ((valorApostadoConta * 10) * 0.90);
                vitoriasNoCassino++;
                bigWins++;
                totalApostado += valorApostadoConta;
            }
        }
    } else {
        if (tipoDaMoeda == 'frag') {
            fragmentosCelestiais += (valorApostadoConta * 10);
            fragmentosCelestiaisTotais += (valorApostadoConta * 10);
            bigWins++;
            totalApostado += valorApostadoConta;
        }
    }
    document.getElementById('cassinoMoeda').style.backgroundImage = 'url(assets/coin/cassino-coin-de-ladinho.png)'
    document.getElementById('resultadoAposta').innerText = 'BIG WIN!!!';
    document.getElementById('resultadoMoeda').innerHTML = 'DE LADINHO!';
    isCoinSpining = false;
    isGambleGoing = false;
    calcularValores();
}

function cassinoWin(tipoDaMoeda, valorApostado, allIn) {
    valorApostadoConta = valorApostado;
    if (allIn === 1 && tipoDaMoeda == "grana") { valorApostadoConta = dinheiroLimpo }
    if (allIn === 1 && tipoDaMoeda == "frag") { valorApostadoConta = fragmentosCelestiais }
    if (tipoDaMoeda == "grana") {
        if (hasCleanerCassino) {
            fragmentosCelestiais += (valorApostadoConta / 10000)
            dinheiroLimpo += valorApostadoConta;
            dinheiroLimpoTotal += valorApostadoConta;
            ganhosEmAposta += valorApostadoConta;
            vitoriasNoCassino++;
            totalApostado += valorApostadoConta;
        } else {
            if (hasCelestialMachines) {
                fragmentosCelestiais += (valorApostadoConta / 10000)
                dinheiroLimpo -= valorApostadoConta;
                dinheiroSujo += (valorApostadoConta * 2);
                dinheiroSujoTotal += (valorApostadoConta * 2);
                ganhosEmAposta += valorApostadoConta;
                vitoriasNoCassino++;
                totalApostado += valorApostadoConta;
            } else {
                dinheiroLimpo -= valorApostadoConta;
                dinheiroSujo += (valorApostadoConta * 2);
                dinheiroSujoTotal += (valorApostadoConta * 2);
                ganhosEmAposta += valorApostadoConta;
                vitoriasNoCassino++;
                totalApostado += valorApostadoConta;
            }
        }
    } else {
        if (tipoDaMoeda == 'frag') {
            fragmentosCelestiais += valorApostadoConta;
            fragmentosCelestiaisTotais += valorApostadoConta;
        }
    }
    if (faceApostada == 'cara') {
        document.getElementById('cassinoMoeda').style.backgroundImage = 'url(assets/coin/cassino-coin-tails.png)';
        document.getElementById('resultadoMoeda').innerText = 'Moeda: Cara!';
    }
    if (faceApostada == 'coroa') {
        document.getElementById('cassinoMoeda').style.backgroundImage = 'url(assets/coin/cassino-coin-crown.png)';
        document.getElementById('resultadoMoeda').innerText = 'Moeda: Coroa!';
    }
    document.getElementById('resultadoAposta').innerText = 'Resultado: Ganhou!';
    isCoinSpining = false;
    isGambleGoing = false;
    calcularValores();
}

function cassinoLoss(tipoDaMoeda, valorApostado, allIn) {
    valorApostadoConta = valorApostado;
    if (allIn === 1 & tipoDaMoeda == "grana") { valorApostadoConta = dinheiroLimpo }
    if (allIn === 1 & tipoDaMoeda == "frag") { valorApostadoConta = fragmentosCelestiais }
    if (tipoDaMoeda == 'grana') {
        if (hasCleanerCassino) {
            dinheiroLimpo -= valorApostadoConta;
            perdasEmApostas += valorApostadoConta;
            derrotasNoCassino++;
            totalApostado += valorApostadoConta;
        } else {
            if (hasCelestialMachines) {
                dinheiroLimpo -= valorApostadoConta;
                perdasEmApostas += valorApostadoConta;
                derrotasNoCassino++;
                totalApostado += valorApostadoConta;
            } else {
                dinheiroLimpo -= valorApostadoConta;
                perdasEmApostas += valorApostadoConta;
                derrotasNoCassino++;
                totalApostado += valorApostadoConta;
            }
        }
    } else {
        if (tipoDaMoeda == 'frag') {
            fragmentosCelestiais -= valorApostadoConta;
        }
    }
    if (faceApostada == 'coroa') {
        document.getElementById('cassinoMoeda').style.backgroundImage = 'url(assets/coin/cassino-coin-tails.png)';
        document.getElementById('resultadoMoeda').innerText = 'Moeda: Cara!';
    }
    if (faceApostada == 'cara') {
        document.getElementById('cassinoMoeda').style.backgroundImage = 'url(assets/coin/cassino-coin-crown.png)';
        document.getElementById('resultadoMoeda').innerText = 'Moeda: Coroa!';
    }
    document.getElementById('resultadoAposta').innerText = 'Resultado: Perdeu :(';
    isCoinSpining = false;
    isGambleGoing = false;
    calcularValores();
}

function spinCoin(allIn) {
    if (isGambleGoing) { return; }
    isCoinSpining = true;
    isGambleGoing = true;
    document.getElementById('cassinoMoeda').style.backgroundImage = 'url(assets/coin/cassino-moeda-girando.gif)';
    setTimeout(() => {
        GAMBLE(allIn);
        isGambleGoing = false;
    }, 1000);
}

function aferirAposta(aposta) {
    if (isGambleGoing) { alert('aposta em andamento') } else {
        if (aposta == 'cara') {
            document.getElementById('suaAposta').innerText = 'Sua aposta: Cara';
            faceApostada = 'cara';
        } else {
            if (aposta == 'coroa') {
                document.getElementById('suaAposta').innerText = 'Sua aposta: Coroa';
                faceApostada = 'coroa';
            }
        }
    }
}

function doCoinIdle() {
    if (isCoinSpining == true) {
        coinStoppedFor = 0;
    } else {
        if (coinStoppedFor < 20) { coinStoppedFor++ } else {
            if (coinStoppedFor >= 20) {
                document.getElementById('cassinoMoeda').style.backgroundImage = 'url(assets/coin/cassino-moeda-girando.gif)';
                document.getElementById('resultadoMoeda').innerText = 'Moeda: Idle';
            }
        }
    }
}

function changeGambleCurrency() {
    if (isGambleGoing) { alert('aposta em andamento') } else {
        if (currencySwitch == 'grana' && hasGamblingAddiction) {
            currencySwitch = 'frag';
            document.getElementById('currencySwitch').style.backgroundImage = 'url(assets/misc/fragment-to-dinheiro-switch-fragments.png)';
        } else {
            currencySwitch = 'grana';
            document.getElementById('currencySwitch').style.backgroundImage = 'url(assets/misc/fragment-to-dinheiro-switch-grana.png)';
        }
    }
}

// muda entre creditos e estatisticas
function doMisc() {
    if (isCreditsShown == true && isStatsShown == false) {
        document.getElementById('stats').style.display = 'inline';
        document.getElementById('credits').style.display = 'none';
        isStatsShown = true;
        isCreditsShown = false;
    } else {
        if (isCreditsShown == false && isStatsShown == true) {
            document.getElementById('credits').style.display = 'inline';
            document.getElementById('stats').style.display = 'none';
            isStatsShown = false;
            isCreditsShown = true;
        }
    }
}

// realiza a compra dos upgs de prestigio
function prestigeTree(a) {
    if (a === 1 && fichasCelestiais >= 2 && hasTreeUpg1 == false) {
        fichasCelestiais -= 2;
        hasGamblingAddiction = true;
        hasTreeUpg1 = true;
        document.getElementById('prestigeUpg1').style.backgroundColor = 'green';
    }
    if (a === 2 && fichasCelestiais >= 1 && hasTreeUpg2 == false) {
        fichasCelestiais -= 1;
        hasCelestialMachines = true;
        hasTreeUpg2 = true;
        document.getElementById('prestigeUpg2').style.backgroundColor = 'green';
    }
    if (a === 3 && fichasCelestiais >= 6 && hasTreeUpg3 == false && hasTreeUpg1 == true) {
        fichasCelestiais -= 3;
        hasAutoClicker = true;
        hasTreeUpg3 = true;
        document.getElementById('prestigeUpg3').style.backgroundColor = 'green';
    }
    if (a === 4 && fichasCelestiais >= 2 && hasTreeUpg4 == false && hasTreeUpg2 == true) {
        fichasCelestiais -= 2;
        hasCleanerCassino = true;
        hasTreeUpg4 = true;
        document.getElementById('prestigeUpg4').style.backgroundColor = 'green';
    }
    if (a === 5 && fichasCelestiais >= 15 && hasTreeUpg5 == false && hasTreeUpg3 == true) {
        fichasCelestiais -= 15;
        hasFichasToBonus = true;
        hasTreeUpg5 = true;
        document.getElementById('prestigeUpg5').style.backgroundColor = 'green';
    }
    if (a === 6 && fichasCelestiais >= 8 && hasTreeUpg6 == false && hasTreeUpg4 == true) {
        fichasCelestiais -= 8;
        hasBetterOdds = true;
        hasTreeUpg6 = true;
        document.getElementById('prestigeUpg6').style.backgroundColor = 'green';
    }
    if (a === 7 && fichasCelestiais >= 35 && hasTreeUpg7 == false && hasTreeUpg5 == true && hasTreeUpg6 == true) {
        fichasCelestiais -= 35;
        hasTreeUpg7 = true;
        prestigeMultiplierMultiplier = 10;
        prestigeReqMultiplier = 10;
        prestigeMultiplier = (1 * (10 ** prestigios));
        requisitosDoPrestigio = (100 * (10 ** prestigios));
        document.getElementById('prestigeUpg7').style.backgroundColor = 'green';
    }
    calcularValores();
}

// reseta os valores considerados da run e atribui os bonus
function prestigiar() {
    if (fragmentosCelestiais >= requisitosDoPrestigio) {
        fragmentosCelestiais -= requisitosDoPrestigio;
        fichasCelestiais += requisitosDoPrestigio / 100;
        fichasCelestiaisTotais += requisitosDoPrestigio / 100;
        requisitosDoPrestigio *= prestigeReqMultiplier;
        prestigeMultiplier *= prestigeMultiplierMultiplier;
        prestigios++;
        if (prestigios == 0) { upgPriceMultiplier = 1.20 }
        if (prestigios == 1) { upgPriceMultiplier = 1.18 }
        if (prestigios == 2) { upgPriceMultiplier = 1.16 }
        if (prestigios == 3) { upgPriceMultiplier = 1.14 }
        if (prestigios == 4) { upgPriceMultiplier = 1.12 }
        if (prestigios >= 5) { upgPriceMultiplier = 1.10 };
        dinheiroSujo = 0;
        m1 = 1;
        m2 = 1;
        dinheiroLimpo = 0;
        renda = 0;
        lavagem = 1;
        ganhoPorM1Upg = 1;
        ganhoPorM1UpgTotal = 0;
        m1UpgPrice = 10;
        m1UpgComprados = 0;
        buyXNum = 1;
        buyXDisplay = 1;
        rendaUpg1Price = 20;
        rendaUpg2Price = 100;
        renda1comprados = 0;
        renda2comprados = 0;
        ganhoRenda1 = 1;
        ganhoRenda1total = 0;
        ganhoRenda2 = 5;
        ganhoRenda2total = 0;
        hasRendaToM1upg = false;
        hasM2ToLavagemUpg = false;
        m1UpgMultiplier = 1;
        m2UpgMultiplier = 1;
        hardM1Bonus = 0;
        hardM2Bonus = 0;
        rendaUpgMultiplier = 1;
        lavagemUpgMultiplier = 1;
        m2UpgComprados = 0;
        lavagem1Comprados = 0;
        lavagem2Comprados = 0;
        m2UpgPrice = 15;
        lavagem1UpgPrice = 80;
        lavagem2UpgPrice = 200;
        ganhoM2 = 1;
        ganhoLavagem1 = 2;
        ganhoLavagem2 = 5;
        ganhoM2Total = 0;
        ganhoLavagem1Total = 0;
        ganhoLavagem2Total = 0;
        m1UpgPriceDisplay = 10;
        m2UpgPriceDisplay = 15;
        rendaUpg1PriceDisplay = 20;
        rendaUpg2PriceDisplay = 100;
        lavagem1UpgPriceDisplay = 80;
        lavagem2UpgPriceDisplay = 200;
        has1timeUpg1 = false;
        has1timeUpg2 = false;
        has1timeUpg3 = false;
        has1timeUpg4 = false;
        has1timeUpg5 = false;
        has1timeUpg6 = false;
        has1timeUpg7 = false;
        has1timeUpg8 = false;
        has1timeUpg9 = false;
        has1timeUpg10 = false;
        has1timeUpg11 = false;
        has1timeUpg12 = false;
        has1timeUpg13 = false;
        has1timeUpg14 = false;
        has1timeUpg15 = false;
        has1timeUpg16 = false;
        has1timeUpg17 = false;
        has1timeUpg18 = false;
        upg1time1price = Math.round(Math.floor(upg1time1price * 1.75));
        upg1time2price = Math.round(Math.floor(upg1time2price * 1.75));
        upg1time3price = Math.round(Math.floor(upg1time3price * 1.75));
        upg1time4price = Math.round(Math.floor(upg1time4price * 1.75));
        upg1time5price = Math.round(Math.floor(upg1time5price * 1.75));
        upg1time6price = Math.round(Math.floor(upg1time6price * 1.75));
        upg1time7price = Math.round(Math.floor(upg1time7price * 1.75));
        upg1time8price = Math.round(Math.floor(upg1time8price * 1.75));
        upg1time9price = Math.round(Math.floor(upg1time9price * 1.75));
        upg1time10price = Math.round(Math.floor(upg1time10price * 1.75));
        upg1time11price = Math.round(Math.floor(upg1time11price * 1.75));
        upg1time12price = Math.round(Math.floor(upg1time12price * 1.75));
        upg1time13price = Math.round(Math.floor(upg1time13price * 1.75));
        upg1time14price = Math.round(Math.floor(upg1time14price * 1.75));
        upg1time15price = Math.round(Math.floor(upg1time15price * 1.75));
        upg1time16price = Math.round(Math.floor(upg1time16price * 1.75));
        upg1time17price = Math.round(Math.floor(upg1time17price * 1.75));
        upg1time18price = Math.round(Math.floor(upg1time18price * 1.75));
        document.getElementById("buy1timeUpg1").style.display = 'inline';
        document.getElementById("buy1timeUpg2").style.display = 'inline';
        document.getElementById("buy1timeUpg3").style.display = 'inline';
        document.getElementById("buy1timeUpg4").style.display = 'inline';
        document.getElementById("buy1timeUpg5").style.display = 'inline';
        document.getElementById("buy1timeUpg6").style.display = 'inline';
        document.getElementById("buy1timeUpg7").style.display = 'inline';
        document.getElementById("buy1timeUpg8").style.display = 'inline';
        document.getElementById("buy1timeUpg9").style.display = 'inline';
        document.getElementById("buy1timeUpg10").style.display = 'inline';
        document.getElementById("buy1timeUpg11").style.display = 'inline';
        document.getElementById("buy1timeUpg12").style.display = 'inline';
        document.getElementById("buy1timeUpg13").style.display = 'inline';
        document.getElementById("buy1timeUpg14").style.display = 'inline';
        document.getElementById("buy1timeUpg15").style.display = 'inline';
        document.getElementById("buy1timeUpg16").style.display = 'inline';
        document.getElementById("buy1timeUpg17").style.display = 'inline';
        document.getElementById("buy1timeUpg18").style.display = 'inline';
        calcularValores();
    } else { }
}

// realiza o aumento scale
function doZoom(a) {
    if (a !== 'plus' && a !== 'minus') {
        return;
    }
    if (zoomLevel === 0) {
        if (a === 'plus') {
            document.getElementById('bg').style.transform = "scale(1.1247) translate(5.6%, 5.7%)";
            zoomLevel = 1;
        }
    } else if (zoomLevel === 1) {
        if (a === 'plus') {
            document.getElementById('bg').style.transform = "scale(1.405) translate(14.5%, 14.5%)";
            zoomLevel = 2;
        } else if (a === 'minus') {
            document.getElementById('bg').style.transform = "scale(1.0) translate(0%, 0%)";
            zoomLevel = 0;
        }
    } else if (zoomLevel === 2) {
        if (a === 'minus') {
            document.getElementById('bg').style.transform = "scale(1.1247) translate(5.6%, 5.7%)";
            zoomLevel = 1;
        }
    }
}

// clica automaticamente // upg de prestigio
function doAutoClicker() {
    if (hasAutoClicker) {
        if (isAutoClickerOn) {
            // Desativa o Auto Clicker
            isAutoClickerOn = false;
            clearInterval(autoM1); // Para o intervalo do M1
            clearInterval(autoM2); // Para o intervalo do M2
            document.getElementById('btnAutoClicker').style.backgroundImage = 'url(assets/misc/auto-clicker-off.png)';
        } else {
            // Ativa o Auto Clicker
            isAutoClickerOn = true;
            autoM1 = setInterval(doM1, 80); // Configura o intervalo do M1
            autoM2 = setInterval(doM2, 80); // Configura o intervalo do M2
            document.getElementById('btnAutoClicker').style.backgroundImage = 'url(assets/misc/auto-clicker-on.png)';
        }
    } else {
        // Alerta caso o Auto Clicker não tenha sido comprado
        alert('Não adquirido');
    }
}

// faz a passagem do tempo artificialmente e as coisas que dependem nela
function doTime() {
    dinheiroSujoTotal += renda;
    dinheiroSujo += renda;
    fragmentosCelestiais += (renda / 10000);
    fragmentosCelestiaisTotais += (renda / 10000);
    if (lavagem <= dinheiroSujo) {
        dinheiroSujo -= lavagem;
        dinheiroLimpo += lavagem;
        dinheiroLimpoTotal += lavagem;
    } else {
        if (dinheiroSujo == 0) { } else {
            if (lavagem > dinheiroSujo) {
                dinheiroLimpo += dinheiroSujo;
                dinheiroLimpoTotal += dinheiroSujo;
                dinheiroSujo = 0;
            }
        }
    }
    segundosDeGameplay++;
    segundosDeGameplayDivididos = segundosDeGameplay % 60;
    minutosDeGameplay = Math.floor((segundosDeGameplay / 60) % 60);
    horasDeGameplay = Math.floor(((segundosDeGameplay / 60) / 60) % 24)
    diasDeGameplay = Math.floor((((segundosDeGameplay / 60) / 60) / 24))
    document.getElementById('segundosDeGameplayDivididos').innerHTML = segundosDeGameplayDivididos;
    document.getElementById('minutosDeGameplay').innerHTML = minutosDeGameplay;
    document.getElementById('horasDeGameplay').innerHTML = horasDeGameplay;
    document.getElementById('diasDeGameplay').innerHTML = diasDeGameplay;
}

// muda as imagens da barra
function doBarraPainel(botaoApertado) {
    switch (botaoApertado) {
        case 11:
            document.getElementById('upgradesPrincipal').style.display = 'inline';
            document.getElementById('cassino').style.display = 'none';
            document.getElementById('placar').style.display = 'none';
            document.getElementById('btn1Barra1').style.backgroundImage = 'url(assets/bar-1/128px-icone1-barra1-on.png)'
            document.getElementById('btn2Barra1').style.backgroundImage = 'url(assets/bar-1/129px-icone2-barra1-off.png)'
            document.getElementById('btn3Barra1').style.backgroundImage = 'url(assets/bar-1/128px-icone3-barra1-off.png)'
            break;
        case 21:
            document.getElementById('upgradesPrincipal').style.display = 'none';
            document.getElementById('cassino').style.display = 'inline';
            document.getElementById('placar').style.display = 'none';
            document.getElementById('btn1Barra1').style.backgroundImage = 'url(assets/bar-1/128px-icone1-barra1-off.png)'
            document.getElementById('btn2Barra1').style.backgroundImage = 'url(assets/bar-1/129px-icone2-barra1-on.png)'
            document.getElementById('btn3Barra1').style.backgroundImage = 'url(assets/bar-1/128px-icone3-barra1-off.png)'
            break;
        case 31:
            document.getElementById('upgradesPrincipal').style.display = 'none';
            document.getElementById('cassino').style.display = 'none';
            document.getElementById('placar').style.display = 'inline';
            document.getElementById('btn1Barra1').style.backgroundImage = 'url(assets/bar-1/128px-icone1-barra1-off.png)'
            document.getElementById('btn2Barra1').style.backgroundImage = 'url(assets/bar-1/129px-icone2-barra1-off.png)'
            document.getElementById('btn3Barra1').style.backgroundImage = 'url(assets/bar-1/128px-icone3-barra1-on.png)'
            break;
        case 12:
            document.getElementById('melhorias1time').style.display = 'inline';
            document.getElementById('arvorePrestigio').style.display = 'none';
            document.getElementById('conta').style.display = 'none';
            document.getElementById('btn1Barra2').style.backgroundImage = 'url(assets/bar-2/128px-icone1-barra2-on.png)'
            document.getElementById('btn2Barra2').style.backgroundImage = 'url(assets/bar-2/129px-icone2-barra2-off.png)'
            document.getElementById('btn3Barra2').style.backgroundImage = 'url(assets/bar-2/128px-icone3-barra2-off.png)'
            break;
        case 22:
            document.getElementById('melhorias1time').style.display = 'none';
            document.getElementById('arvorePrestigio').style.display = 'inline';
            document.getElementById('conta').style.display = 'none';
            document.getElementById('btn1Barra2').style.backgroundImage = 'url(assets/bar-2/128px-icone1-barra2-off.png)'
            document.getElementById('btn2Barra2').style.backgroundImage = 'url(assets/bar-2/129px-icone2-barra2-on.png)'
            document.getElementById('btn3Barra2').style.backgroundImage = 'url(assets/bar-2/128px-icone3-barra2-off.png)'
            break;
        case 32:
            document.getElementById('melhorias1time').style.display = 'none';
            document.getElementById('arvorePrestigio').style.display = 'none';
            document.getElementById('conta').style.display = 'inline';
            document.getElementById('btn1Barra2').style.backgroundImage = 'url(assets/bar-2/128px-icone1-barra2-off.png)'
            document.getElementById('btn2Barra2').style.backgroundImage = 'url(assets/bar-2/129px-icone2-barra2-off.png)'
            document.getElementById('btn3Barra2').style.backgroundImage = 'url(assets/bar-2/128px-icone3-barra2-on.png)'
            break;
    }
}

// utilidades para devs
function devFt(chave) {
    switch (chave) {
        case 1:
            dinheiroSujo += (1024 * 100 ** 10);
            break;
        case 2:
            dinheiroSujo = 0;
            dinheiroLimpo = 0;
            fragmentosCelestiais = 0;
            fichasCelestiais = 0;
            break;
        case 3:
            dinheiroLimpo += (1024 * 100 ** 10);
            break;
        case 4:
            hasAutoClicker = true;
            break;
        case 5:
            fragmentosCelestiais += (1024 * 100 ** 10);
            break;
        case 6:
            fichasCelestiais += (1024 * 100 ** 10);
            break;
        default:
            alert('Error: 149');
            break;
    }
    calcularValores();
}

// consts dos intervalos e oq são
const timeAdvancer = setInterval(doTime, 1000);
const errorCatcher = setInterval(calcularValores, 1000);
const giradorDeMoeda = setInterval(doCoinIdle, 1000);