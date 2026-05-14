export type RootStackParamList = {
    Login: undefined;
    MainTabs: { usuario: string };
    PetDetalhes: undefined; // Mantido do seu código original caso use no futuro
};

export type TabParamList = {
    Dashboard: { usuario: string };
    Explorar: { usuario: string };
    Perfil: { usuario: string };
};